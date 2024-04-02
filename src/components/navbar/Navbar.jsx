import Links from "@/components/navbar/links/Links";
import styles from "./navbar.module.css"
import Link from "next/link";

const Navbar = () => {
    return <div>
        <div className={styles.container}>
            <Link href={"./"} className={styles.logo}>Logo</Link>
            <Links/>
        </div>
    </div>
}
export default Navbar;