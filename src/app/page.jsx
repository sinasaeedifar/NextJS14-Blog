import styles from "./home.module.css"
import Image from "next/image";

const HomePage = () => {
    return <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Creative Thoughts Agency</h1>
            <p className={styles.desc}>lorem ipsum bla bla bla ......</p>
            <div className={styles.buttons}>
                <button className={styles.button}>Learn More</button>
                <button className={styles.button}>Contact</button>
            </div>
            <div className={styles.brands}>
                <Image src={"/brands.png"} alt={""} fill className={styles.brandImage}/>
            </div>
        </div>
        <div className={styles.imgContainer}>
        <Image src={"/laptop.gif"} alt={""} fill className={styles.heroImg} />
        </div>

    </div>
}
export default HomePage;