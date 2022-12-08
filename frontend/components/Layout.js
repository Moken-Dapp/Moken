import Head from "next/head";
import Link from "next/link";
import { Navbar } from "./Navbar";

export const Layout = ({ title, children, navbar = true, footer = true }) => {
    return (
        <div>
            <Head>
                <title>{title ? `${title} | Moken` : "Moken"}</title>
            </Head>

            <main className="min-h-screen h-full flex flex-col px-4 moderat">
                {navbar ? <Navbar /> : null}

                {children}
            </main>

            {footer ? (
                <footer className="bg-black text-white flex flex-row justify-center items-center p-4 mt-4">
                    <Link href={"/"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            viewBox="0 0 29 30"
                        >
                            <path
                                fill="#fff"
                                d="M14.543.585c.586.187 2.04 1.36 4.36 3.52 2.32 2.16 4.52 4.387 6.6 6.68s3.12 3.653 3.12 4.08c0 .453-1.04 1.853-3.12 4.2a105.578 105.578 0 01-6.6 6.8c-2.32 2.16-3.774 3.24-4.36 3.24-.427.027-1.454-.613-3.08-1.92a89.633 89.633 0 01-4.96-4.48c-1.68-1.68-3.147-3.293-4.4-4.84-1.254-1.573-1.787-2.573-1.6-3 .266-.613 1.413-2.107 3.44-4.48a90.777 90.777 0 016.36-6.8c2.24-2.16 3.653-3.16 4.24-3zm6.04 14.28c.106-.373-.76-1.4-2.6-3.08-1.814-1.707-2.96-2.68-3.44-2.92-.374-.16-1.48.693-3.32 2.56-1.84 1.867-2.76 3.013-2.76 3.44.026.373.96 1.467 2.8 3.28 1.866 1.787 2.96 2.68 3.28 2.68.293 0 1.346-.893 3.16-2.68 1.813-1.787 2.773-2.88 2.88-3.28zm-6.04-2.28c.186.107.613.48 1.28 1.12.693.613 1.026 1 1 1.16-.054.133-.427.547-1.12 1.24-.667.667-1.054 1-1.16 1-.134 0-.547-.333-1.24-1-.694-.693-1.04-1.107-1.04-1.24 0-.16.346-.587 1.04-1.28.693-.72 1.106-1.053 1.24-1z"
                            ></path>
                        </svg>
                    </Link>
                </footer>
            ) : null}
        </div>
    );
};
