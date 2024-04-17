import styles from "./singlePost.module.css"
import Image from "next/image";

const SinglePostPage = () => {
    return <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src={"/hero.png"} alt={""} fill/>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.detail}>
                <Image className={styles.avatar} src={"/hero.png"} alt={""} width={50} height={50}/>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Terry Jeferson</span>
                </div>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>publish</span>
                    <span className={styles.detailValue}>2024/04/06</span>
                </div>
            </div>
            <div className={styles.content}>this is a random sentences</div>
        </div>
    </div>
}
export default SinglePostPage;