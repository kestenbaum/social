import React, {FC} from 'react';
import {Login} from "../pages/Login/Login";
import {PrivatePage} from "../pages/PrivatePage";

export const AppRouter:FC = () => {
    const auth = false;

    return (
      auth
        ? <PrivatePage/>
        : <Login/>
    );
};
