import React, {FC} from 'react';
import style from '../button/Button.module.css';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
}

export const Button:FC<Button> = ({children}) => {
    return (
        <button className={style.btn}>
            {children}
        </button>
    );
};
