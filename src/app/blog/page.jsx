import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard";
import error from "@/app/error";
import {cache} from "swr/_internal";
import {getPosts} from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//     console.log("the page has been refreshed")
//
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}})
//     if (!res.ok) {
//         throw new error("cant get data")
//     }
//     return res.json();
// }

const BlogPage = async () => {
    // FETCH DATA WITH AN API
    // const posts = await getData();

    // FETCH DATA WITHOUT AN API
    const posts = await getPosts();
    return <div className={styles.container}>
        {posts.map((post) => {
            return (<div className={styles.post} key={post.id}>
                <PostCard post={post}/>
            </div>)
        })}


    </div>
}
export default BlogPage;