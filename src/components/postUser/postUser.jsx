import Image from "next/image";
import error from "@/app/error";
import styles from  "./postUser.module.css"

const getUserData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!res.ok) {
        throw new error("cant get data")
    }
    return res.json();
}
const PostUser = ({params}) => {
    const userId = params;
    const user = getUserData(userId);
    return (
        <div className={styles.container}>
            <span className={styles.title}></span>
            <span className={styles.username}></span>
        </div>
    );
}

export default PostUser;