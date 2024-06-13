import { LayoutGridIcon, SearchIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <div className=" relative">

            <div className="py-3 px-3  w-full bg-white shadow border-b">
                <div className="flex justify-between items-center">
                    <div className="flex justify-items-center items-center gap-2">
                        <Link to={"/"} className=" text-base md:text-2xl font-bold bg-pink-200 px-4 py-1 tracking-wider rounded-full">LOGO</Link>
                        <Link to={`${pathname.split("/")[1] == "category" ? "/" : "/category"}`}>
                            <LayoutGridIcon className="w-5 h-5 md:w-6 md:h-6 " />
                        </Link>
                        {/* <Sheet>
                            <SheetTrigger>
                                <AlignLeftIcon className="text-white" />
                            </SheetTrigger>
                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetDescription className="z-[999]">
                                        <ul
                                            className="text-xl text-gray-700 flex flex-col justify-start items-start z-[999]">
                                            {navbar.map((item, i) => (
                                                <li key={item.name} data-aos="fade-right" data-aos-delay={(i + 1) * 100} data-aos-duration={(i + 1) * 100} >
                                                    <SheetClose asChild>
                                                        <a href={`/${item.slug}`} className="md:p-3 py-2 flex gap-2 items-center hover:text-maincolor duration-300">
                                                            {item.icon}
                                                            <p>
                                                                hello
                                                            </p>

                                                        </a>
                                                    </SheetClose>
                                                </li>
                                            ))}
                                            <SheetClose asChild>
                                                <a href="#contact" className="duration-300 hover:scale-95">
                                                    <Button className="w-full" data-aos="fade-right" data-aos-delay={8 * 100} data-aos-duration={8 * 100} variant="default">{"Bog'lanish"}</Button>
                                                </a>
                                            </SheetClose>
                                        </ul>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet> */}
                    </div>
                    <div className="flex justify-items-center items-center gap-2 ">
                        <div className=" relative text-black">
                            <input className=" placeholder:text-black bg-gray-100 rounded-3xl py-2 px-3 outline-none text-base w-[350px] pl-10 hidden lg:block md:block" placeholder="Bugun nima qidiryabsiz?" />
                            <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />

                        </div>
                        <button className="inline-block  rounded-full border px-2 py-0.5 md:px-3 md:py-2 hover:bg-gray-100 duration-300">Tizimga kirish</button>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Navbar;