"use client"
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const NavigationTestPage = props => {
    // CLIENT SIDE NAVIGATION
    const pathName  = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const q = searchParams.get("q")
    const handleClick = () => {
        console.log("clicked");
        router.forward()
        console.log(pathName)
        console.log(q)

    }
    return (
        <div>
            <Link prefetch={false} href={"/"}>Click Here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    );
};


export default NavigationTestPage;