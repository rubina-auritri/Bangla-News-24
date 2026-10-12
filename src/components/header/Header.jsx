
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Marque from "./Marque";

const Header = () => {


    const today = new Date();

    const currentDate = today.toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    return (
        <>
            <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.webp"
                        alt="বাংলা নিউজ ২৪"
                        width={60}
                        height={60}
                    />

                    <div>
                        <h1 className="text-2xl font-bold text-red-500">
                            বাংলা নিউজ ২৪
                        </h1>


                        <p className="text-sm text-red-500">

                            <span className="text-xs text-neutral-500">
                                {currentDate}
                            </span>
                        </p>
                    </div>
                </Link>
                <div className="absolute right-4 flex gap-2 " >
                     <Link href="/sign-in"> 
                    <button className="rounded-md border border-red-500 px-4 py-2 text-black hover:bg-red-600">
                        সাইন ইন
                    </button>
                </Link>
                    <Link href="/sign-up">
                        <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                            সাইন আপ
                        </button>
                    </Link>
                    </div>
            </div>

            <div>
                <Navbar />
            </div>
            <div>
                <Marque/>
            </div>
        </>
    );
};

export default Header;

