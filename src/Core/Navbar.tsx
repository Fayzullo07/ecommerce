
import { LayoutGridIcon, SearchIcon, ShirtIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

import React from "react";


const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const data = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    return (
        <div className=" relative">

            <div className="py-3 px-3  w-full bg-white shadow border-b">
                <div className="flex justify-between items-center">
                    <div className="flex justify-items-center items-center gap-2">
                        <Link to={"/"} className=" text-base md:text-2xl font-bold bg-pink-200 px-4 py-1 tracking-wider rounded-full">LOGO</Link>
                        <LayoutGridIcon className="w-5 h-5 md:w-6 md:h-6 " onClick={() => setOpen(!open)} />
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

            {open && (
                <div className="  bg-white  opacity-100  w-full  absolute  top-16  z-[100]">

                    <div className="grid grid-cols-6 h-full botder-b-2">
                        <div className=" col-span-1 border-2 ">
                            {data.map((_, index) => (
                                <div key={index} className=" text-gray-500 text-lg flex items-center gap-2 p-2 hover:bg-gray-200 duration-300">
                                    <ShirtIcon size={18} className="text-black" />
                                    <span>Shirt</span>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-5 px-6 border-b-2">
                            <h2 className="py-4 text-lg md:text-2xl font-bold">Mobile va Akksesuarlar</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 pb-6">
                                {data.map((_, index) => (
                                    <div key={index}>
                                        <div className="p-4 bg-gray-200 rounded-lg h-40 ">

                                            <img className="h-full  mx-auto" src="https://www.tailwind-kit.com/images/object/10.png" alt="" />
                                        </div>
                                        <div className=" py-2">
                                            <h2 className="text-base font-bold">Kiyiladigan buyumlar</h2>
                                            <p className="text-sm text-gray-500">lorem ipsum</p>
                                            <p className="text-sm text-gray-500">lorem ipsum</p>
                                            <p className="text-sm text-gray-500">lorem ipsum</p>
                                            <p className="text-sm text-gray-500">lorem ipsum</p>
                                            <p className="text-sm text-gray-500">lorem ipsum</p>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className=" absolute top-5 right-5 cursor-pointer hover:scale-125 duration-300 " onClick={() => setOpen(false)} >
                        <XIcon className="text-black" />
                    </div>
                </div>
            )}
        </div >
    )
}

export default Navbar;