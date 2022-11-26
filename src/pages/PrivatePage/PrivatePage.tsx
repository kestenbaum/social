import React, {FC} from 'react';
import {Sidebar} from "../../component/Sidebar/Sidebar";
import style from '../PrivatePage/PrivatePage.module.css';

export const PrivatePage:FC = () => {
    return (
        <div className={style.content}>
            <Sidebar/>
            <>content</>
        </div>
    );
};
