import Link from "next/link";

const Navbar = () => {
    const buttonClasses =
        "translate duration-300 font-second font-bold text-lg m-3 hover:-translate-y-1";

    return (
        <div className="sticky top-0 z-50 flex flex-row justify-start items-center w-full h-12 bg-black/40">
            <Link href="/">
                <button className={buttonClasses}>Home</button>
            </Link>
            <Link href="/contact">
                <button className={buttonClasses}>Contact</button>
            </Link>
            <Link href="/projects">
                <button className={buttonClasses}>Projects</button>
            </Link>
        </div>
    );
};

export default Navbar;
