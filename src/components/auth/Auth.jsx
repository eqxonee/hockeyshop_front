import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import AuthApiWorker from "../../api/AuthApiWorker";
import UsersApiWorker from "../../api/UsersApiWorker";
import LocalStorageWorker from "../store/LocalStorageWorker";
import {useNavigate} from "react-router-dom";
import Categories from "../categories/Categories";


const Auth = () => {

    let [checkPhone, setCheckPhone] = useState(false);
    let authApiWorker = new AuthApiWorker();
    let usersApiWorker = new UsersApiWorker();
    let localStorageWorker = new LocalStorageWorker();
    let navigate = useNavigate();

    const onFinish = (values) => {

        if (checkPhone === false) {
            let checkPhone = {
                phoneNumber: values.phoneNumber
            };
            authApiWorker.checkPhoneNumber(checkPhone).then(
                response => {
                    alert("success " + response.data);
                }
            ).catch(
                error => {
                    //console.log(error);
                    alert(error);
                }
            )
        } else {
            let credentials = {
                phoneNumber: values.phoneNumber,
                smsCode: values.smsCode
            }
            authApiWorker.authenticate(credentials).then(
                response => {

                    let token = response.data.token;
                    localStorageWorker.save("token", token);

                    usersApiWorker.getIdByToken(token).then(
                        response => {
                            let userid = response.data;
                            localStorageWorker.save("userid", userid);

                            navigate("/shop/categories");
                        }
                    ).catch(
                        error => {
                            alert(error);
                        }
                    )

                }
            ).catch(
                error => {
                    //console.log(error);
                    alert(error);
                }
            )
        }

        setCheckPhone(true);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Номер телефона"
                name="phoneNumber"
                rules={[
                    {
                        required: true,
                        message: 'Введите номер телефона',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            {
                checkPhone &&
                <Form.Item
                    label="СМС код"
                    name="smsCode"
                    rules={[
                        {
                            required: true,
                            message: 'Введите код из смс',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            }


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>

            </Form.Item>
        </Form>
    );
};

export default Auth;