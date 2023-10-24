import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-sky-900 p-8 my-6 rounded-md">
        <Image
          src="/Z.png"
          width={40}
          height={40}
          className="mx-auto rounded"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Space for Zplus7</h1>
        </Link>
        <div className="flex flex-row place-content-center mt-3 text-white">
          <Link href="/about" className="underline hover:underline-offset-4 mr-3" >about</Link>
          <a className="underline hover:underline-offset-4 mr-3" href="/">blog</a>
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
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
