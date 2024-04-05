import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return <div className={styles.container}>
        <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>About Agency</h2>
            <h1 className={styles.title}>We create digital ideas that are bigger,braver and better</h1>
            <p className={styles.desc}>As a high growth brand, it was critical for us to find a partner who delivered
                regional expertise—the best of both worlds</p>
        </div>
        <div className={styles.boxes}>
            <div className={styles.box}>
                <h1>10K +</h1>
                <p>Year of Experience</p>
            </div>
            <div className={styles.box}>
                <h1>10K +</h1>
                <p>Year of Experience</p>
            </div>
            <div className={styles.box}>
                <h1>10K +</h1>
                <p>Year of Experience</p>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src={"/about.png"} alt={"About Image"} fill/>
        </div>
    </div>
}
export default AboutPage;