import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard";
import error from "@/app/error";
import {cache} from "swr/_internal";

const getData = async () => {
    console.log("the page has been refreshed")

    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}})
    if (!res.ok) {
        throw new error("cant get data")
    }
    return res.json();
}

const BlogPage = async () => {
    const posts = await getData();
    return <div className={styles.container}>
        {posts.map((post) => {
            return (<div className={styles.post} key={post.id}>
                <PostCard post={post}/>
            </div>)
        })}


    </div>
}
export default BlogPage;