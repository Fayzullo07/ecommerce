import Container from "@/Core/Container";
import { productsGetAPI } from "@/api/GlobalRequest";
import { HeartIcon, LayoutGridIcon, LayoutListIcon, StarIcon } from "lucide-react";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const ProductsCategory = () => {
    const [active, setActive] = React.useState(0);
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            return await productsGetAPI();
        },
        keepPreviousData: true,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return `Error: ${error}`;
    return (
        <>
            <div className="bg-white pt-10">

                <Container>
                    <div className="flex items-center justify-between py-2">
                        <div>10 ta</div>
                        <div className="flex border p-1 bg-gray-200 rounded">
                            <div className={`p-1.5 ${active == 0 && "bg-white "} hover:bg-white rounded duration-300`} onClick={() => setActive(0)}>
                                <LayoutGridIcon className="w-7 h-7" />
                            </div>
                            <div className={`p-1.5 ${active == 1 && "bg-white "} hover:bg-white rounded duration-300`} onClick={() => setActive(1)}>
                                <LayoutListIcon className="w-7 h-7" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4 h-[95vh]">
                        <div className="border hidden md:block">filter</div>
                        {active == 0 && (
                            <div className=" col-span-4 grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-4">
                                {data?.data.map((data: any, index: number) => (
                                    <div key={index} className="border bg-white rounded-lg hover:shadow-lg duration-300">
                                        <Link to={`/product/${index}`} className="flex flex-col h-full">
                                            <div className="overflow-hidden relative min-h-48 max-h-48 flex items-center justify-center  w-full flex-grow text-center p-1 bg-white-200">
                                                <img className="object-cover max-w-40 max-h-40 hover:scale-105 duration-300" src={data.image} alt="Converse sneakers" />

                                                <div className=" absolute top-2 right-2 p-1 flex items-center justify-center  cursor-pointer border bg-white rounded-full">
                                                    <HeartIcon size={18} className="text-red-500 hover:scale-125 duration-300" />
                                                </div>

                                                <div className=" absolute top-2 left-2 p-0.5 px-2 bg-[#E6FFA9] rounded-full">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <b>100<span className="font-normal">+ bevakar</span></b>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="gap-1 p-2 text-gray-700 flex-grow">
                                                <div className="grid grid-cols-4 items-start gap-2">
                                                    <div className="col-span-3 h-10 overflow-hidden text-sm  font-semibold">
                                                        {data.title}
                                                    </div>
                                                    <div className="col-span-1 grid grid-cols-2 items-center gap-1">
                                                        <StarIcon className=" h-4 w-4 mr-2" />
                                                        <span className="text-sm font-semibold">{data.rating.rate}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="font-semibold text-lg p-2">${data.price}</div>
                                        </Link>
                                    </div>
                                ))}

                            </div>
                        )}

                        {active == 1 && (
                            <div className=" col-span-4 grid grid-cols-1 gap-4">
                                {data?.data.map((data: any, index: number) => (
                                    <div key={index} className=" w-full bg-white rounded-lg hover:shadow-lg duration-300 overflow-hidden border">
                                        <Link to={`/product/${index}`} className="flex ">
                                            <div className="overflow-hidden  relative min-w-48 max-w-48   text-center p-1 bg-white flex items-center justify-center">
                                                <img className="object-cover max-w-40 max-h-40  hover:scale-105 duration-300" src={data.image} alt="Converse sneakers" />

                                                <div className=" absolute top-2 right-2 p-1 flex items-center justify-center  cursor-pointer border bg-white rounded-full">
                                                    <HeartIcon size={18} className="text-red-500 hover:scale-125 duration-300" />
                                                </div>

                                                <div className=" absolute top-2 left-2 p-0.5 px-2 bg-[#E6FFA9] rounded-full">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <b>100<span className="font-normal">+ bevakar</span></b>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1 p-2 text-gray-700">
                                                <div className=" space-y-2 flex-grow items-start gap-2">
                                                    <div className=" text-base md:text-xl font-semibold">
                                                        {data.title}
                                                    </div>
                                                    <div className=" grid grid-cols-2 items-center justify-start gap-1">
                                                        <div className="flex items-center ">
                                                            <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                            <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                            <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                            <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                        </div>
                                                        <span className="text-sm font-semibold">4,6</span>
                                                    </div>
                                                </div>
                                                <div className="font-semibold text-xl   ">$60</div>
                                            </div>
                                        </Link>




                                    </div>
                                ))}

                            </div>
                        )}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ProductsCategory;