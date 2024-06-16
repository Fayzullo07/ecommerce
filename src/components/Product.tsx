import ImagesCarusel from "@/Core/ImagesCarusel";
import Products from "./Products";
import { Link, useParams } from "react-router-dom";
import {  BellIcon, ChevronDownIcon, ChevronRightIcon, GitCompareArrowsIcon, HeartIcon, PenLineIcon, PlusIcon, SlidersHorizontalIcon, StarIcon, XIcon } from "lucide-react";
import { SlideshowLightbox } from "lightbox.js-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

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
import Chart from "@/Core/Chart";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




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
                <Container >
                    <div className="flex flex-col md:flex-row">
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

                        <div className="md:flex-1 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4">
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

                            <div className=" col-span-2 grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-4">
                                <div className="col-span-3">
                                    <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2 ">Apple iPhone 15 Pro Max</h2>

                                    <div className="mb-4">
                                        <div className="">

                                            <div className="flex items-center justify-between md:justify-start mt-2 text-xs md:text-sm">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <div className="flex items-center justify-between p-1 cursor-pointer duration-300">
                                                                <StarIcon className="w-3 md:w-5 text-yellow-600 mr-1 md:mr-2" />
                                                                <span >4,6</span>
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>2575 reviews</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>

                                                <div className="w-[1px] mx-0.5 md:mx-2 h-4 bg-gray-400 rounded-full"></div>

                                                <div className="flex items-center justify-between p-1 cursor-pointer rounded-full hover:bg-slate-200 duration-300">
                                                    <PenLineIcon size={16} className="w-3 md:w-5 text-yellow-600 mr-1 md:mr-2" />
                                                    <span>Please rate</span>
                                                </div>

                                                <div className="w-[1px] mx-0.5 md:mx-2 h-4 bg-gray-400 rounded-full"></div>

                                                <div className="flex items-center justify-between p-1 cursor-pointer rounded-full hover:bg-slate-200 duration-300">
                                                    <BellIcon size={16} className="w-3 md:w-5 text-red-600 mr-1 md:mr-2" />
                                                    <span>Monitor price</span>
                                                </div>

                                                <div className="w-[1px] mx-0.5 md:mx-2 h-4 bg-gray-400 rounded-full"></div>

                                                <Link to={`/product/${id}/compare`} className="flex items-center justify-between p-1  cursor-pointer rounded-full hover:bg-slate-200 duration-300">
                                                    <GitCompareArrowsIcon size={16} className="w-3 md:w-5 text-green-600 mr-1 md:mr-2" />
                                                    <span>Compare</span>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mb-2">
                                        <span className="font-bold text-sm text-gray-700">Product Description:</span>
                                        <p className="text-gray-600 text-sm mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                            vamus commodo nulla ut
                                        </p>
                                    </div>

                                    <div className="block md:hidden">

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
                                <div className="col-span-2 hidden md:block">
                                    <Chart />
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Filter */}
            <div className="bg-gray-100 py-2">
                <Container  >
                    <ScrollArea >
                        <div className="flex items-center justify-start  gap-2 md:gap-4 p-2">
                            <div className="text-base bg-white px-3 py-1.5 border hover:border-black duration-300 rounded-full">
                                <SlidersHorizontalIcon className="h-5 w-5" />
                            </div>
                            <div className="w-40 text-base bg-white px-3 py-1.5 border hover:border-black duration-300 rounded-full">
                                Faqat stokda
                            </div>

                            <div className="w-48 text-base bg-white px-3 py-1.5 border hover:border-black duration-300 rounded-full">
                                Ishlatilgan maxsulotlar
                            </div>

                            <Select >
                                <SelectTrigger className="w-[180px] rounded-full">
                                    <SelectValue placeholder="Narxalr" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Eng arzon narxlar</SelectItem>
                                    <SelectItem value="dark">Eng qimmat narxlar</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <div className="space-y-2 ">
                        {reviews.map((_, index) => (
                            <div key={index} className="bg-white border rounded-xl overflow-hidden">
                                <div className="flex  border-b-2">
                                    <div className="border w-12 flex items-center justify-center ">
                                        <ChevronDownIcon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded overflow-hidden ml-2 p-2">
                                                <img className="object-cover rounded-full h-full w-full hover:scale-110 duration-300" src="https://www.pricerunner.se/images/brenda/4564eda9ffe90606d125582746e9b5df.jpg?d=40x40&a=center" alt="Product Image" />
                                            </div>
                                            <div className="font-semibold text-xl">Amazon</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-3 md:py-3 md:px-4">
                                    <div className=" text-base md:text-xl font-semibold text-blue-400 hover:underline duration-300">Iphone 15 pro max</div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center flex-col-reverse md:flex-row   gap-2">
                                            <div className="md:flex hidden items-center gap-2 text-gray-400 text-sm md:text-base">
                                                <span>Yetkazib berish bepul</span>
                                                <span>2-3 kun</span>
                                            </div>
                                            <div className="text-xl font-semibold">$600</div>
                                        </div>

                                        <ChevronRightIcon className="h-6 w-6 text-blue-500 cursor-pointer hover:scale-125 duration-300" />
                                    </div>

                                </div>
                                <div className="flex md:hidden items-center justify-end gap-2 text-gray-400 text-sm md:text-base px-2 py-1">
                                    <span>Yetkazib berish bepul</span>
                                    <span>2-3 kun</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>


            <div className="bg-white py-8 sticky top-">
                <Container>
                    <Tabs defaultValue="reviews" className="bg-white">
                        <TabsList className="sticky top-0 z-10 bg-white">
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
                                    <div className="col-span-2 grid gap-2 space-y-2 ">
                                        {reviews.slice(0, 2).map((_, index) => (
                                            <div key={index} className=" border p-2 rounded-xl hover:shadow-lg duration-300" >
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        <div className="inline-block relative">
                                                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="flex items-baseline">
                                                            <span className="text-gray-600 font-bold">Mary T.</span>
                                                        </p>
                                                        <div className="flex items-center mt-1">

                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                            </div>
                                                            <span className="ml-2 text-green-600 text-xs">07/07/2023</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="mt-3 text-gray-500">
                                                        <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                    </div>
                                                    <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                                                        <div className="flex items-center">
                                                            <span>Was this review helplful?</span>
                                                            <button className="flex items-center ml-6">
                                                                <svg className="w-3 h-3 hover:scale-125 hover:text-green-500 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" /></svg>
                                                                <span className="ml-2">56</span>
                                                            </button>
                                                            <button className="flex items-center ml-4">
                                                                <svg className="w-3 h-3 hover:scale-125 hover:text-red-500 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" /></svg>
                                                                <span className="ml-2">10</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className=" text-center">
                                            <Modal button={<button className="text-base bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-full">All</button>} >
                                                <ScrollArea className="h-[380px]">
                                                    <div className="grid gap-2 space-y-2">
                                                        {reviews.map((_, index) => (
                                                            <div key={index} className="text-start border p-2 rounded-xl hover:shadow-lg duration-300" >
                                                                <div className="flex items-start">
                                                                    <div className="flex-shrink-0">
                                                                        <div className="inline-block relative">
                                                                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                                                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                                                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ml-4">
                                                                        <p className="flex items-baseline">
                                                                            <span className="text-gray-600 font-bold">Mary T.</span>
                                                                        </p>
                                                                        <div className="flex items-center mt-1">

                                                                            <div className="flex items-center">
                                                                                <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                                <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                                <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                                <svg className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                                <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                                                            </div>
                                                                            <span className="ml-2 text-green-600 text-xs">07/07/2023</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="mt-3 text-gray-500">
                                                                        <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                                    </div>
                                                                    <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                                                                        <div className="flex items-center">
                                                                            <span>Was this review helplful?</span>
                                                                            <button className="flex items-center ml-6">
                                                                                <svg className="w-3 h-3 hover:scale-125 hover:text-green-500 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" /></svg>
                                                                                <span className="ml-2">56</span>
                                                                            </button>
                                                                            <button className="flex items-center ml-4">
                                                                                <svg className="w-3 h-3 hover:scale-125 hover:text-red-500 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" /></svg>
                                                                                <span className="ml-2">10</span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
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

            <div>
                <Container>
                    <h2>Chart</h2>
                    <Chart />
                </Container>
            </div>
        </div>
    );
};

export default Product;