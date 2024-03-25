import Links from "@/components/navbar/links/Links";
import styles from "./navbar.module.css"

const Navbar = () => {
    return <div>
        <div className={styles.container}>
            <p className={styles.logo}>Logo</p>
            <Links/>
        </div>
    </div>
}
export default Navbar;