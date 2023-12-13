import React from 'react';
import styles from './sidebar.module.css';
import {
    MdDashboard,
    MdSupervidedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdOutlineLogout,
    MdHelpCenter
} from "react-icons/md"
import MenuLinks from "@/app/ui/dashboard/sidebar/menu/menuLinks";

const menu = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                icon: <MdDashboard/>
            },
            {
                title: "Users",
                icon: <MdSupervidedUserCircle/>
            },
            {
                title: "Products",
                icon: <MdShoppingBag/>
            },
            {
                title: "Transactions",
                icon: <MdAttachMoney/>
            },
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Reports",
                icon: <MdAnalytics/>
            },
            {
                title: "Revenue",
                icon: <MdWork/>
            },
            {
                title: "Teams",
                icon: <MdPeople/>
            },
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                icon: <MdOutlineSettings/>,
                path: "/dashboard/settings"
            },
            {
                title: "Help",
                icon: <MdHelpCenter/>,
                path: "/dashboard/help"
            },
            {
                title: "Logout",
                icon: <MdOutlineLogout/>,
                path: "/dashboard/logout"
            },
        ]
    }
]

function Sidebar() {
    return (
        <div className={styles.container}>
            <ul>
                {menu.map((cat)=>(
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map(item=>(
                            <MenuLinks item={item} key={item.title}/>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
