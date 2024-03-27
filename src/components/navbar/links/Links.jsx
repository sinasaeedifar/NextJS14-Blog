"use client";
import styles from "./links.module.css";
import NavLink from "@/components/navbar/links/navLink/navLink";
import {useState} from "react";

const Links = () => {
    const [open, setOpen] = useState(false);

    const links = [{
        path: "/",
        title: "Home"
    }, {
        path: "/contact",
        title: "Contact"
    },
        {
            path: "/about",
            title: "About"
        },
        {
            path: "/blog",
            title: "Blog"
        }]
    //TEMPORARY
    const isAdmin = true;
    const session = true;
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link => <NavLink item={link} key={link.title}/>))}
                {session ? (
                    <>
                        {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
                        <button className={styles.logout}>Logout</button>
                    </>) : (
                    <NavLink item={{title: "Login", path: "/login"}}/>
                )}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && (<div className={styles.mobileLinks}>
                {links.map((link) => {
                    return <NavLink item={link} key={link.title}/>
                })}
            </div>)}
        </div>
    )
}

export default Links;
