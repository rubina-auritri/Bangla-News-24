import Link from "next/link";

const Navbar = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/categories",
        {
            cache: "no-store",
        }
    );

    const { data: categories } = await res.json();

    return (
        <nav className="bg-white-800">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-4">




                <div className="flex gap-6 py-4">
                      <Link href={"/"}>হোম</Link>
                    {categories
                        .filter((category) => category.title !== "মূলপাতা")
                        .map((category) => (
                            <Link
                                key={category.slug}
                                href={`/category/${category.slug}`}
                                className="text-black hover:text-red-400"
                            >
                                {category.title}
                            </Link>
                        ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;