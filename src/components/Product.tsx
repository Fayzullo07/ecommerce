import ImagesCarusel from "@/Core/ImagesCarusel";
import Products from "./Products";
import { Link, useParams } from "react-router-dom";
import { BellIcon, GitCompareArrowsIcon, HeartIcon, PenLineIcon, PlusIcon, StarIcon, XIcon } from "lucide-react";
import { SlideshowLightbox } from "lightbox.js-react";
import { ScrollArea } from "./ui/scroll-area";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Container from "@/Core/Container";
import { Progress } from "./ui/progress";
import Modal from "@/Core/Modal";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"



const Product = () => {
    const { id } = useParams();
    const data = [
        'https://brostore.uz/cdn/shop/files/3_e94252bf-8cb3-449e-b9de-99fbc7f4774e_345x_crop_center.png?v=1710766021',
        "https://brostore.uz/cdn/shop/files/1_da22d22e-6c4d-469e-8106-cf061096fd01_345x_crop_center.png?v=1700566370",
        "https://brostore.uz/cdn/shop/files/5_558fbb11-1a32-459c-8602-1e6f84506b6a_345x_crop_center.png?v=1700566370",
        "https://brostore.uz/cdn/shop/files/9_279035b4-b17c-406f-a909-c1e7dba38c1c_345x_crop_center.png?v=1700566370",
        "https://brostore.uz/cdn/shop/files/13_a19b3510-2f47-4886-819d-32c3534f0469_345x_crop_center.png?v=1710766021",
        "https://brostore.uz/cdn/shop/files/7_f554ce90-70c9-4e3f-bd23-2ed500c45313_345x_crop_center.png?v=1710766021"
    ]

    const reviews = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    return (
        <div>
            <div className="bg-white py-4">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className=" hidden md:block space-y-2">
                            <ScrollArea className="h-[380px]">
                                <SlideshowLightbox className="hidden md:block space-y-2 overflow-hidden" showThumbnails={true}>
                                    {data.map((item, index) => {
                                        return (
                                            <img key={index} className="w-20 h-20 cursor-pointer  object-cover rounded-2xl hover:scale-110 duration-300" src={item} alt="Product Image" />
                                        )
                                    })}
                                </SlideshowLightbox>
                            </ScrollArea>
                        </div>

                        <div className="md:flex-1 px-4 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4">
                            <div className=" h-fit col-span-1 rounded-lg bg-gray-300 mb-4 relative">
                                {/* <SlideshowLightbox className="space-y-2 overflow-hidden" showThumbnails={true}> */}

                                    <ImagesCarusel images={data} button={false} />
                                {/* </SlideshowLightbox> */}
                                <div className=" absolute top-2 right-3 p-2  cursor-pointer border bg-white rounded-full">
                                    <HeartIcon size={18} className="text-red-500 hover:scale-125 duration-300" />
                                </div>

                                <div className=" absolute top-2 left-3 p-1 px-2 bg-[#E6FFA9] rounded-full">
                                    <div className="flex items-center justify-between">
                                        <b>100+ <span className="font-normal"> bevakar</span></b>

                                    </div>
                                </div>
                            </div>

                            <div className=" col-span-2 px-4">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2 hidden md:block">Apple iPhone 15 Pro Max</h2>


                                <div className="mb-4">
                                    <div className="hidden md:block">

                                        <div className="flex items-center mt-2 ">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <div className="flex items-center justify-between p-1 px-2 cursor-pointer duration-300">
                                                            <StarIcon size={16} className=" text-yellow-600 mr-2" />
                                                            <span>4,6</span>
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>2575 reviews</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            <div className="w-[1px] mx-2 h-5 bg-gray-400 rounded-full"></div>
                                            <div className="flex items-center justify-between p-1 px-2 cursor-pointer rounded-full hover:bg-slate-200 duration-300">
                                                <PenLineIcon size={16} className=" text-yellow-600 mr-2" />
                                                <span>Please rate</span>
                                            </div>
                                            <div className="w-[1px] mx-2 h-5 bg-gray-400 rounded-full"></div>
                                            <div className="flex items-center justify-between p-1 px-2 cursor-pointer rounded-full hover:bg-slate-200 duration-300">
                                                <BellIcon size={16} className=" text-red-500 mr-2" />
                                                <span>Monitor price</span>
                                            </div>
                                            <div className="w-[1px] mx-2 h-5 bg-gray-400 rounded-full"></div>
                                            <Link to={`/product/${id}/compare`} className="flex items-center justify-between p-1 px-2 cursor-pointer rounded-full hover:bg-slate-200 duration-300">
                                                <GitCompareArrowsIcon size={16} className=" text-green-500 mr-2" />
                                                <span>Compare</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="block md:hidden">
                                        <div className="flex items-start justify-between mb-4">

                                            <h2 className="text-xl font-bold text-gray-800 mb-2">Apple iPhone 15 Pro Max</h2>
                                            <div>
                                                <Drawer>
                                                    <DrawerTrigger>
                                                        <div className="border bg-white hover:bg-gray-300 rounded-full p-1 px-3 space-y-1 hover:scale-110 duration-300">
                                                            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                                                            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                                                            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                                                        </div>
                                                    </DrawerTrigger>
                                                    <DrawerContent>
                                                        <DrawerHeader className=" relative">
                                                            <DrawerTitle>Apple iPhone 15 Pro Max</DrawerTitle>
                                                            <DrawerClose className="absolute top-0 right-0 p-1 px-2 bg-white rounded-full">
                                                                <XIcon size={16} />
                                                            </DrawerClose>
                                                        </DrawerHeader>
                                                        <DrawerFooter>
                                                            <div className=" ">
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger>
                                                                            <div className="flex items-center justify-between p-1 px-2 cursor-pointer duration-300">
                                                                                <StarIcon size={16} className=" text-yellow-600 mr-4" />
                                                                                <span>4,6</span>
                                                                            </div>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <p>2575 reviews</p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                                <div className="flex items-center justify-start p-1 px-2 cursor-pointer rounded-full hover:bg-slate-200 duration-300">
                                                                    <PenLineIcon size={16} className=" text-yellow-600 mr-4" />
                                                                    <span>Please rate</span>
                                                                </div>
                                                                <div className="flex items-center justify-start p-1 px-2 cursor-pointer rounded-full hover:bg-slate-200 duration-300">
                                                                    <BellIcon size={16} className=" text-red-500 mr-4" />
                                                                    <span>Monitor price</span>
                                                                </div>
                                                                <Link to={`/product/${id}/compare`} className="flex items-center justify-start p-1 px-2 cursor-pointer rounded-full hover:bg-slate-200 duration-300">
                                                                    <GitCompareArrowsIcon size={16} className=" text-green-500 mr-4" />
                                                                    <span>Compare</span>
                                                                </Link>
                                                            </div>
                                                        </DrawerFooter>
                                                    </DrawerContent>
                                                </Drawer>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="mb-2">
                                    <span className="font-bold text-gray-700">Product Description:</span>
                                    <p className="text-gray-600 text-sm mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                    </p>
                                </div>

                                <div className="flex items-center justify-end gap-2 mb-4">
                                    <div>
                                        <Drawer>
                                            <DrawerTrigger>
                                                <div className="border bg-white rounded-full p-1 px-3 space-y-1 hover:scale-110 duration-300 cursor-pointer">Colors</div>
                                            </DrawerTrigger>
                                            <DrawerContent>
                                                <DrawerHeader className=" relative">
                                                    <DrawerTitle>Colors</DrawerTitle>
                                                    <DrawerClose className="absolute top-0 right-0 p-1 px-2 bg-white rounded-full">
                                                        <XIcon size={16} />
                                                    </DrawerClose>
                                                </DrawerHeader>
                                                <DrawerFooter>
                                                    <div className="flex flex-wrap gap-2 items-center mt-2">
                                                        <div className="border-2 font-bold flex justify-between items-center p-1 px-3  border-black rounded-full">
                                                            <span>All</span>
                                                        </div>
                                                        <div className="border cursor-pointer flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                            <span className="w-6 h-6 rounded-full bg-green-500 border  mr-2"></span>
                                                            <span>Green</span>
                                                        </div>

                                                        <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                            <span className="w-6 h-6 rounded-full bg-red-500 border  mr-2"></span>
                                                            <span>Red</span>
                                                        </div>

                                                        <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                            <span className="w-6 h-6 rounded-full bg-gray-800 border  mr-2"></span>
                                                            <span>Gray</span>
                                                        </div>

                                                        <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                            <span className="w-6 h-6 rounded-full bg-white-800 border  mr-2"></span>
                                                            <span>White</span>
                                                        </div>
                                                    </div>
                                                </DrawerFooter>
                                            </DrawerContent>
                                        </Drawer>
                                    </div>
                                    <div>
                                        <Drawer>
                                            <DrawerTrigger>
                                                <div className="border bg-white rounded-full p-1 px-3 space-y-1 hover:scale-110 duration-300 cursor-pointer">Sizes</div>
                                            </DrawerTrigger>
                                            <DrawerContent>
                                                <DrawerHeader className=" relative">
                                                    <DrawerTitle>Versions</DrawerTitle>
                                                    <DrawerClose className="absolute top-0 right-0 p-1 px-2 bg-white rounded-full">
                                                        <XIcon size={16} />
                                                    </DrawerClose>
                                                </DrawerHeader>
                                                <DrawerFooter>
                                                    <div className="flex flex-wrap gap-2 items-center mt-2">
                                                        <div className="border-2 font-bold flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                            <span>128GB</span>
                                                        </div>
                                                        <div className="border cursor-pointer flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                            <span>256GB</span>
                                                        </div>

                                                        <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                            <span>512GB</span>
                                                        </div>

                                                        <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                            <span>1TB</span>
                                                        </div>
                                                    </div>
                                                </DrawerFooter>
                                            </DrawerContent>
                                        </Drawer>
                                    </div>
                                </div>

                                <div className="hidden md:block">

                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700">Select Size:</span>
                                        <div className="flex flex-wrap gap-2 items-center mt-2">
                                            <div className="border-2 font-bold flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                <span>128GB</span>
                                            </div>
                                            <div className="border cursor-pointer flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                <span>256GB</span>
                                            </div>

                                            <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                <span>512GB</span>
                                            </div>

                                            <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                <span>1TB</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700">Select Color:</span>
                                        <div className="flex flex-wrap gap-2 items-center mt-2">
                                            <div className="border-2 font-bold flex justify-between items-center p-1 px-3  border-black rounded-full">
                                                <span>All</span>
                                            </div>
                                            <div className="border cursor-pointer flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                <span className="w-6 h-6 rounded-full bg-green-500 border  mr-2"></span>
                                                <span>Green</span>
                                            </div>

                                            <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                <span className="w-6 h-6 rounded-full bg-red-500 border  mr-2"></span>
                                                <span>Red</span>
                                            </div>

                                            <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                <span className="w-6 h-6 rounded-full bg-gray-800 border  mr-2"></span>
                                                <span>Gray</span>
                                            </div>

                                            <div className="border flex justify-between items-center p-1 px-2  border-black rounded-full">
                                                <span className="w-6 h-6 rounded-full bg-white-800 border  mr-2"></span>
                                                <span>White</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-8">
                <Container>

                    <Tabs defaultValue="reviews">
                        <TabsList>
                            <TabsTrigger value="reviews">Reviews</TabsTrigger>
                            <TabsTrigger value="description">Description</TabsTrigger>
                            <TabsTrigger value="qa">Q & A</TabsTrigger>
                        </TabsList>
                        <TabsContent value="description">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Apple iPhone 15 Pro Max</h2>
                                <div className="mb-4">  <span className="font-bold text-gray-700">Product Description:</span>
                                    <p className="text-gray-600 text-sm mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="qa">Question and Answer</TabsContent>
                        <TabsContent value="reviews">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-800 mb-2">Reviews</h2>
                                        <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div>
                                        <button className="flex text-base items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-full">
                                            <PlusIcon size={16} className="mr-2" />
                                            Add Review
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="col-span-1">
                                        <div>

                                            <div className="flex items-center p-2 gap-2">
                                                <div className="p-2 bg-yellow-400 rounded-full">

                                                    <StarIcon size={20} />
                                                </div>
                                                <b className="text-2xl">4,6</b>
                                            </div>
                                            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet.</p>
                                        </div>

                                        <div className="text-base">
                                            <div className="flex items-center p-2 gap-2">
                                                <div>5</div>
                                                <Progress className="h-2 bg-gray-300" value={90} />
                                            </div>

                                            <div className="flex items-center p-2 gap-2">
                                                <div>4</div>
                                                <Progress className="h-2 bg-gray-300" value={50} />
                                            </div>

                                            <div className="flex items-center p-2 gap-2">
                                                <div>3</div>
                                                <Progress className="h-2 bg-gray-300" value={10} />
                                            </div>

                                            <div className="flex items-center p-2 gap-2">
                                                <div>2</div>
                                                <Progress className="h-2 bg-gray-300" value={5} />
                                            </div>

                                            <div className="flex items-center p-2 gap-2">
                                                <div>1</div>
                                                <Progress className="h-2 bg-gray-300" value={0} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-span-2">
                                        {reviews.slice(0, 2).map((_, index) => (
                                            <div key={index} className="flex items-start mb-4 pb-4 border-b border-gray-300 px-2">
                                                <div className="flex-shrink-0">
                                                    <div className="inline-block relative">
                                                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                            <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="flex items-center justify-between">

                                                        <p className="flex items-baseline">
                                                            <span className="text-gray-600 font-bold">Mary T.</span>
                                                        </p>
                                                        <div className="flex items-center mt-1">
                                                            <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                            <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                            <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                            <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                        </div>
                                                    </div>

                                                    <div className="mt-3">
                                                        <p className="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className=" text-center">
                                            <Modal button={<button className="text-base bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-full">All</button>} >
                                                <ScrollArea className="h-[380px] p-2">

                                                    {reviews.map((_, index) => (
                                                        <div key={index} className="flex items-start mb-4 pb-4 border-b border-gray-300 text-start">
                                                            <div className="flex-shrink-0">
                                                                <div className="inline-block relative">
                                                                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                                        <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="flex items-center justify-between">

                                                                    <p className="flex items-baseline">
                                                                        <span className="text-gray-600 font-bold">Mary T.</span>
                                                                    </p>
                                                                    <div className="flex items-center mt-1">
                                                                        <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                        <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                        <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                        <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                        <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <p className="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </ScrollArea>
                                            </Modal>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </Container>

            </div>

            <div>
                <Products />
            </div>
        </div>
    );
};

export default Product;