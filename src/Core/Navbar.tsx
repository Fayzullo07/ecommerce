
import { LayoutGridIcon, ShirtIcon, XIcon } from "lucide-react";
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

            <div className="py-3 px-3  w-full bg-green-900">
                <div className="flex justify-between items-center">
                    <div className="flex justify-items-center items-center gap-2">
                        <Link to={"/"} className=" font-semibold text-white">LOGO</Link>
                        <LayoutGridIcon className="text-white" onClick={() => setOpen(!open)} />
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


                        <div className=" relative">
                            <input className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block" placeholder="Search for Grocery, Stores, Vegetable, or Meat" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>


                    </div>
                    <div className="flex justify-items-center items-center gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-5 h-5 text-yellow-300 hidden lg:block md:block">
                            <path fill-rule="evenodd"
                                d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                                clip-rule="evenodd" />
                        </svg>

                        <p className="text-sm text-white hidden lg:block md:block">Order now and get it within
                            <span className="text-yellow-300">15 mint!</span></p>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-8 h-8 text-white rounded-full ring-2 ring-white p-1 relative">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                        <img className="inline-block w-8 h-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
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