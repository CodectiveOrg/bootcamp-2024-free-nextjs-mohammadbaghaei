"use client";

import clsx from "clsx";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

type navLink = {
    title: string,
    href: string
}

const navLinks: navLink[] = [
    {
        title: "خانه",
        href: "/"
    },
    {
        title: "پزشکان",
        href: "/doctors"
    },
    {
        title: "درباره ما",
        href: "/about"
    }
]

export default function Header(): ReactElement {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    {
                        navLinks.map(({ title, href }) => (
                            <li key={title}>
                                <Link className={clsx(href === pathname && styles.active)} href={href}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <button className={styles.cta}>ورود | ثبت نام</button>
        </header>
    );
}  