import styles from "./singlePost.module.css"
import Image from "next/image";
import error from "@/app/error";
import PostUser from "@/components/postUser/postUser";
import {Suspense} from "react";
import {getPost} from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//     if (!res.ok) {
//         throw new error("cant get data")
//     }
//     return res.json();
// }
const SinglePostPage = async ({params}) => {
    const {slug} = params;
    // FETCH DATA WITH AN API
    // const post = await getData(slug);

    // FETCH DATA WITHOUT AN API
    const post = await getPost(slug);
    return <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.avatar} src={"/hero.png"} alt={""} width={50} height={50}/>
        </div>
        {post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post?.userId}/>
        </Suspense>}
        < div className={styles.detailText}>
            <span className={styles.detailTitle}>publish</span>
            <span className={styles.detailValue}>2024/04/06</span>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{post?.title}</h1>
            <div className={styles.content}>{post?.body}</div>
        </div>
    </div>
}
export default SinglePostPage;