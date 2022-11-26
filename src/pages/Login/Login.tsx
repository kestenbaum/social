import React, {FC} from 'react';
import {Button, Input} from '../../component/UI';
import style from '../Login/Login.module.css';

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
