import React, {FC} from 'react';
import {Login} from "../pages/Login";
import {PrivatePage} from "../pages/PrivatePage";

export const AppRouter:FC = () => {
    const auth = false;

    return (
      auth
        ? <PrivatePage/>
        : <Login/>
    );
};
