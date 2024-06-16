import { ChevronRightIcon, LayoutGridIcon, MoveLeftIcon, SearchIcon, ShirtIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [currentPage, setCurrentPage] = useState<string>('home');
    const [isPageOpen, setIsPageOpen] = useState<boolean>(false);

    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    const loadData = async () => {

        setLoading(true);
        // Bu yerda sizning yuklanish jarayoningiz bo'lishi mumkin, masalan, API chaqiruvi
        await new Promise((resolve) => setTimeout(resolve, 300)); // 2 soniya kutish
        setLoading(false);
    };
    useEffect(() => {
        // Yuklanish holatini ko'rsatish uchun timeoutdan foydalanamiz

        loadData();
    }, []);

    const navigateTo = (page: string) => {
        setCurrentPage(page);
    };

    const closePage = () => {
        setIsPageOpen(false);
    };

    const openPage = () => {
        setIsPageOpen(!isPageOpen);
    };
    return (
        <div className=" relative">

            <div className="py-3 px-3  w-full bg-white shadow border-b">
                <div className="flex justify-between items-center">
                    <div className="flex justify-items-center items-center gap-2">
                        <Link to={"/"} className=" text-base md:text-2xl font-bold bg-pink-200 px-4 py-1 tracking-wider rounded-full">LOGO</Link>
                        <div>
                            {isPageOpen ? (
                                <>
                                    <LayoutGridIcon onClick={openPage} className={`w-5 h-5 md:w-6 md:h-6  cursor-pointer`} />
                                    {currentPage === 'home' && <Category navigateTo={navigateTo} closePage={closePage} setIndex={setIndex} index={index} loading={loading} loadData={loadData} />}
                                    {currentPage === 'about' && <About navigateTo={navigateTo} closePage={closePage} setIndex={setIndex} index={index} loading={loading} loadData={loadData} />}
                                </>
                            ) : (
                                <LayoutGridIcon onClick={openPage} className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
                            )}
                        </div>
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


import React, { useEffect, useState } from 'react';
import { categories, categoriese } from "@/data/data";

type PageProps = {
    navigateTo: (page: string) => void;
    closePage: () => void;
    setIndex: (index: number) => void;
    index: number;
    loading: boolean;
    loadData: () => void;
};

const Category: React.FC<PageProps> = ({ navigateTo, closePage, setIndex, index, loading, loadData }) => {



    return (
        <div className=" absolute top-[70px] left-0 w-full min-h-screen h-full bg-white  z-10">
            <div className=" relative ">
                <div className="grid grid-cols-6 h-full botder-b-2">
                    <div className=" hidden md:block col-span-6 lg:col-span-1 md:col-span-2 bg-white border-r-2 ">
                        {categories.map((item, i) => (
                            <div onClick={() => {
                                loadData();
                                setIndex(i);
                            }} key={i} className={`${i == index ? "bg-gray-100" : ""} cursor-pointer text-gray-600 text-lg flex justify-between items-center py-2 px-4 hover:bg-gray-100 duration-300`}>
                                <div className="flex items-center gap-2">

                                    <ShirtIcon size={18} className="text-black" />
                                    <span className="text-lg font-medium">{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" block md:hidden  col-span-6 lg:col-span-1 md:col-span-2 bg-white border-r-2 ">
                        {categories.map((item, i) => (
                            <div onClick={() => {
                                loadData();
                                setIndex(i);
                                navigateTo('about');
                            }} key={i} className={`${i == index ? "bg-gray-100" : ""} cursor-pointer text-gray-600 text-lg flex justify-between items-center py-2 px-4 hover:bg-gray-100 duration-300`}>
                                <div className="flex items-center gap-2">

                                    <ShirtIcon size={18} className="text-black" />
                                    <span className="text-lg font-medium">{item.name}</span>
                                </div>
                                <ChevronRightIcon className="text-black" />
                            </div>
                        ))}
                    </div>
                    <div className="col-span-6 bg-white lg:col-span-5 md:col-span-4  px-6 border-b-2 hiddn sm:bock">
                        <div className="hidden md:block">
                            <div className="flex justify-between items-center">
                                <h2 className="py-4 text-lg md:text-2xl font-bold">{categories[index].name}</h2>
                                <div onClick={() => {
                                    closePage();
                                }} className="cursor-pointer hover:scale-125 duration-300 "  >
                                    <XIcon className="text-black" />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 pb-6">
                                {loading && (
                                    <h1>Loading...</h1>
                                )}
                                {!loading && categoriese.map((item, index) => (
                                    <div key={index}>
                                        <div className="p-4 bg-gray-200 rounded-lg h-40 ">
                                            <img className="h-full  mx-auto hover:scale-105 duration-300" src="https://www.tailwind-kit.com/images/object/10.png" alt="" />
                                        </div>
                                        <div className=" py-2">
                                            <Link to={`/categories/products`} className="text-sm md:text-lg md:tracking-wide font-bold">{item.name}</Link>
                                            {item.children.length > 0 ? item.children.map((item, index) => (
                                                <Link to={`/categories/products`} key={index} className="text-xs md:text-sm text-gray-900 hover:underline duration-300 cursor-pointer">{item.name} </Link>
                                            )) : (
                                                <p className="text-sm text-gray-900">No subcategories</p>
                                            )}

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const About: React.FC<PageProps> = ({ navigateTo, closePage, index, loading }) => {
    return (
        <div className="absolute top-[70px] left-0 w-full min-h-screen h-full bg-white  z-10">
            <div className="col-span-6 bg-white lg:col-span-5 md:col-span-4  px-6 border-b-2 hiddn sm:bock">
                <div className="">
                    <div className="flex justify-between items-center">
                        <div onClick={() => {
                            navigateTo('home');
                        }} className="cursor-pointer hover:scale-125 duration-300 "  >
                            <MoveLeftIcon className="text-black" />
                        </div>
                        <h2 className="py-4 text-lg md:text-2xl font-bold">{categories[index].name}</h2>
                        <div onClick={() => {
                            closePage();
                        }} className="cursor-pointer hover:scale-125 duration-300 "  >
                            <XIcon className="text-black" />
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 pb-6">

                        {loading && (
                            <h1>Loading...</h1>
                        )}
                        {!loading && categoriese.map((item, index) => (
                            <div key={index}>
                                <div className="p-4 bg-gray-200 rounded-lg h-40 ">
                                    <img className="h-full  mx-auto hover:scale-105 duration-300" src="https://www.tailwind-kit.com/images/object/10.png" alt="" />
                                </div>
                                <div className=" py-2">
                                    <Link to={`/categories/products`} className="text-sm md:text-lg md:tracking-wide font-bold">{item.name}</Link>
                                    {item.children.length > 0 ? item.children.map((item, index) => (
                                        <Link to={`/categories/products`} key={index} className="text-xs md:text-sm text-gray-900 hover:underline duration-300 cursor-pointer">{item.name} </Link>
                                    )) : (
                                        <p className="text-sm text-gray-900">No subcategories</p>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

