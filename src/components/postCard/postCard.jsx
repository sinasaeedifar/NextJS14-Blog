import styles from "./postCard.module.css"
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
    return <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src={"/hero.png"} alt={""} fill/>
            </div>
            <span className={styles.date}>01.01.2025</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>
                Title
            </h1>
            <p className={styles.desc}>
                lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>
            <Link className={styles.link} href={"/blog/post"}>Read More</Link>
        </div>
    </div>
}
export default PostCard;