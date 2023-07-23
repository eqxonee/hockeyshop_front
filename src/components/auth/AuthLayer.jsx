import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Auth from "./Auth";
import LocalStorageWorker from "../store/LocalStorageWorker";

const AuthLayer = () => {

    let [isAuth, setIsAuth] = useState(false);
    let localStorageWorker = new LocalStorageWorker();

    useEffect(() => {
        let token = localStorageWorker.get("token");
        let userid = localStorageWorker.get("userid");

        if (token != null && userid != null) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, []);

    return (
        <div>
            {
                isAuth
                    ? <Outlet/>
                    : <Auth/>
            }
        </div>
    );
};

export default AuthLayer;