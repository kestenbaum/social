import React, {FC} from 'react';
import {PrivatePage, Login} from '../pages';

export const AppRouter:FC = () => {
    const auth = true;
    return (
      auth
        ? <PrivatePage/>
        : <Login/>
    );
};
