// TEMPORARY DATA
const users = [{
    id: 1, name: "Sina"
},
    {id: 2, name: "Ahmad"}]
const posts = [
    {id: 1, title: "Header", body: "this is first body", userId: 1},
    {id: 2, title: "Footer", body: "this is second body", userId: 1},
    {id: 3, title: "Title1", body: "this is third body", userId: 2},
    {id: 4, title: "Title2", body: "this is fourth body", userId: 2},
]
export const getPosts = async () => {
    return posts;
}
export const getPost = async (id) => {
    const post = posts.find(post => post.id === parseInt(id));
    return post ? post : null;
}
export const deletePost = async (id) => {
    return posts.find(post => post.id === parseInt(id));
}
export const getUser = async (id) => {
    return users.find(user => user.id === id);
}