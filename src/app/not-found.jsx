import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <h2>Not Found</h2>
            <p>Sorry the page you are looking for is not exist !</p>
            <Link href={"./"}>Return To Home Page</Link>
        </>
    )
}
export default  NotFound;