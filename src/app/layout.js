import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import ClientSideProviderTest from "@/components/clientSideProviderTest";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
      {/*<ClientSideProviderTest>*/}
      <div className={"container"}>
        <Navbar />
        {children}
        <Footer />
      </div>
      {/*</ClientSideProviderTest>*/}
      </body>
    </html>
  )
}
