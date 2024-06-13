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

export const Product = ({ index }: { data: any, index: number }) => {
    return (
        <div className=" w-full bg-white rounded-lg hover:shadow-lg duration-300 overflow-hidden">
            <Link to={`/product/${index}`}>
                <div className="overflow-hidden relative h-48 w-full text-center p-1 bg-gray-200">
                    <img className="object-cover w-40 mx-auto hover:scale-105 duration-300" src="https://brostore.uz/cdn/shop/files/green1_pixian_ai_345x_crop_center.png?v=1709802054" alt="Converse sneakers" />

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
                    <div className="grid grid-cols-4 items-start gap-2">
                        <div className="col-span-3 text-base font-semibold">
                            Samsung Galaxy A55 5G 128GB
                        </div>
                        <div className="col-span-1 grid grid-cols-2 items-center gap-1">
                            <StarIcon className=" h-3 w-3 mr-2" />
                            <span className="text-sm font-semibold">4,6</span>
                        </div>
                    </div>
                    <span className="font-semibold text-lg  ">$60</span>
                </div>
            </Link>




        </div>
    )
}

const Products = () => {
    const plugin2 = React.useRef(
        AutoScroll({ loop: true, speed: 0.2, autoScroll: true }),
        // Autoplay({ delay: 2000, stopOnInteraction: true, speed: 1, })
    )
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
        <div className="bg-white py-10">
            <Container>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Products</h2>
                <div className="hidden md:block">
                    <Carousel
                        plugins={[plugin2.current]}
                        onMouseEnter={plugin2.current.stop}
                        onMouseLeave={plugin2.current.play}
                    >
                        <CarouselContent>
                            {data.map((_, index) => (
                                <CarouselItem key={index} className=" pr-1 basis-1/2 md:basis-1/4 lg:basis-1/6">
                                    <Product data={data[index]} index={index} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="block md:hidden">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">

                        {data.map((_, index) => (
                            <Product key={index} data={data[index]} index={index} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Products;