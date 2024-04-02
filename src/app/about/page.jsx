import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return <>
        <div className={styles.ImgContainer}>
            <Image src={"/about.png"} alt="" fill/>
        < /div>
    </>
}
export default AboutPage;