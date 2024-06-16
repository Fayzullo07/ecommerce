import { Link } from "react-router-dom";
import Container from "../Core/Container";
import { HeartIcon, StarIcon } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react";

import AutoScroll from "embla-carousel-auto-scroll"
import { useQuery } from "react-query";

import { productsGetAPI } from "../api/GlobalRequest";

export const Product = ({ data, index }: { data: any, index: number }) => {
    return (
        <div className="bg-white rounded-lg hover:shadow-lg duration-300">
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
    )
}

const Products = () => {
    const plugin2 = React.useRef(
        AutoScroll({ loop: true, speed: 0.2, autoScroll: true }),
        // Autoplay({ delay: 2000, stopOnInteraction: true, speed: 1, })
    )


    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            return await productsGetAPI();
        },
        keepPreviousData: true,
    });

    if (isLoading) return `<div>Loading...</div>`;
    if (error) return `Error: ${error}`;
    return (
        <div className="bg-white py-10">
            <Container>
                <div  className="flex items-center justify-between">

                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Products</h2>
                    <Link to={`/categories/products`} className="text-base font-semibold">All Products</Link>
                </div>
                <div className="hidden md:block">
                    <Carousel
                        plugins={[plugin2.current]}
                        onMouseEnter={plugin2.current.stop}
                        onMouseLeave={plugin2.current.play}
                    >
                        <CarouselContent className="py-5">
                            {data?.data?.map((item: any, index: number) => (
                                <CarouselItem key={index} className=" pr-1 basis-1/2 md:basis-1/4 lg:basis-1/6">
                                    <Product data={item} index={index} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="block md:hidden">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 my-5">

                        {data?.data?.map((item: any, index: number) => (
                            <Product key={index} data={item} index={index} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Products;

