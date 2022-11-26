import React, {FC} from 'react';
import style from '../input/Input.module.css';

interface Input extends React.InputHTMLAttributes<HTMLInputElement>{
    type: string;
    placeholder: string;
}

export const Input:FC<Input> = ({type, placeholder}) => {
    return (
        <input
            className={style.input}
            type={type}
            placeholder={placeholder}
        />
    );
};
