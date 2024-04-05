import styles from "./postCard.module.css"
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
    return <div className={styles.container}>
        <div className={styles.top}>
            <Image className={styles.img} src={"/post.png"} alt={""} fill/>
            <span className={styles.date}>01.01.2025</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>
                Title
            </h1>
            <p>
                Desk
            </p>
            <Link href={"/blog/post"}>Read More</Link>
        </div>
    </div>
}
export default PostCard;