// "use client"
import styles from "./contact.module.css"
import Image from "next/image";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/HydrationTest";
// const HydrationTest = dynamic(() => import('@/components/HydrationTest'), { ssr: false });
const ContactPage = () => {
    // let a = Math.random()
    // console.log("getting route",a)
    return <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src={"/contact.png"} alt={""} fill/>
        </div>
        <div className={styles.formContainer}>
           {/*<div suppressHydrationWarning>{a}</div>*/}
            <form className={styles.form}>
                <input type={"text"} placeholder={"Name and Surname"}/>
                <input type={"email"} placeholder={"Email Address"}/>
                <input type={"number"} placeholder={"Phone Number (Optional)"}/>
                <textarea name={"number"} id={"Phone Number (Optional)"} cols="30" rows="10"
                          placeholder={"Message"}/>
                <button>Send</button>
            </form>
        </div>
    </div>
}
export default ContactPage;