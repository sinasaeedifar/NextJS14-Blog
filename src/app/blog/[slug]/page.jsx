import styles from "./singlePost.module.css"
import Image from "next/image";

const SinglePostPage = () => {
    return <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src={"/hero.png"} alt={""} fill/>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
        </div>
    </div>
}
export default SinglePostPage