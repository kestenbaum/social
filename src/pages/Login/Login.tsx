import React, {FC} from 'react';
import style from '../Login/Login.module.css';
import {Input} from "../../component/UI/input/Input";
import {Button} from "../../component/UI/button/Button";

export const Login:FC = () => {



    return (
        <div className={style.content}>
            <form className={style.form}>
                <Input
                    type={'text'}
                    placeholder={'Login'}
                />
                <Input
                    type={'password'}
                    placeholder={'Password'}
                />
                <Button>Login</Button>
            </form>
        </div>
    );
};
