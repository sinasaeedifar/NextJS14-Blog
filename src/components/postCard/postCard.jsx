import styles from "./postCard.module.css"
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
    return <div className={styles.container}>
        <div className={styles.top}>
            <Image className={styles.img} src={"https://plus.unsplash.com/premium_photo-1676823552681-bf1d1135fa2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} fill/>
            <span className={styles.date}>01.01.2025</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>
                Title
            </h1>
            <p className={styles.desc}>
                Desk
            </p>
            <Link href={"/blog/post"}>Read More</Link>
        </div>
    </div>
}
export default PostCard;