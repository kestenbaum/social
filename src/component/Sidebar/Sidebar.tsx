import React, {FC} from 'react';
import style from '../Sidebar/Sidebar.module.css';

export interface SidebarMenu {
    id: number;
    title: string;
}

const sidebarMenu: SidebarMenu[] = [
    {
        id: 1,
        title: 'Users'
    },
    {
        id: 2,
        title: 'Posts'
    },
    {
        id: 3,
        title: 'Test'
    },
    {
        id: 4,
        title: 'Profile'
    }
];

export const Sidebar:FC = () => {
    return (
        <aside className={style.aside}>
            <ul className={style.list}>
                {sidebarMenu.map(element =>
                    <li
                        key={element.id}
                        className={style.item}
                    >
                        {element.title}
                    </li>
                )}
            </ul>
        </aside>
    );
};
