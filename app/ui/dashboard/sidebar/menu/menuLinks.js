import React from 'react';
import styles from './menuLinks.module.css';
import Link from "next/link";


function MenuLinks({item}) {
    return (
        <Link href={item.path} className={styles.container}>
            {item.icon}
            {item.title}
        </Link>
    );
}

export default MenuLinks;
