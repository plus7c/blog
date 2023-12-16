import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";


export const metadata = {
  title:"Zplus7",
  description:"This is my blog"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="p-8 my-6 rounded-md">

        <Link href="/">
          <Image
            src="/images/testPicture.jpg"
            width={120}
            height={120}
            className="mx-auto rounded"
            alt={"logo"}
          />
          {/* <h1 className="text-2xl text-black font-bold mt-4">Zplus7</h1> */}
        </Link>
        <div className="flex flex-row place-content-center mt-3 text-black">
          <Link href="/about" className="underline underline-offset-2 hover:underline-offset-4 mr-3" >about</Link>
          <a className="underline underline-offset-2 hover:underline-offset-4 focus:underline-offset-4 mr-3" href="/">blog</a>
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Deployed by Vercel</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-5xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
