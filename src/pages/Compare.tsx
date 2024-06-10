import Container from "@/Core/Container";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch"
import { ImageIcon, SearchIcon, StarIcon, XCircleIcon, XIcon } from "lucide-react";

const Compare = () => {

    const data = [
        {
            name: "Iphone 15 pro max",
            price: "$1500",
            storage: "1TB",
            image: 'https://brostore.uz/cdn/shop/files/3_e94252bf-8cb3-449e-b9de-99fbc7f4774e_345x_crop_center.png?v=1710766021',
        },
        {
            name: "Samsung Galaxy S22 Ultra",
            price: "$1000",
            storage: "512GB",
            image: "https://brostore.uz/cdn/shop/files/green1_pixian_ai_345x_crop_center.png?v=1709802054",
        },
        {
            name: "Redmi Note 12 pro 5G",
            price: "$200",
            storage: "256B",
            image: "https://www.pricerunner.se/product/640x640/3010662489/Xiaomi-Redmi-Note-12-5G-128GB.jpg",
        },


    ]
    return (
        <div className="bg-white py-8">
            <Container>
                <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-semibold">Compare products</div>
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <label htmlFor="airplane-mode" className="text-base text-gray-400">Show differences only</label>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <div className="col-span-3">
                        <div>
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full border">
                                                <thead className="bg-white border">
                                                    <tr className="border">
                                                        <th scope="col" className="text-sm font-medium w-48 text-gray-900">

                                                        </th>
                                                        {data.map((item, index) => (
                                                            <th scope="col" key={index} className="text-sm font-medium  border  text-gray-900 w-48 px-2">
                                                                <img className="object-cover h-full w-full" src={item.image} alt="Converse sneakers" />
                                                            </th>
                                                        ))}

                                                        {data.length <= 1 && (
                                                            <th scope="col" className="text-sm font-medium w-48 text-gray-900">
                                                                <div className="w-full h-full bg-slate-200">
                                                                    <ImageIcon strokeWidth={1} className="h-full w-full" />
                                                                </div>
                                                            </th>
                                                        )}


                                                    </tr>
                                                </thead>
                                                <tbody className="border">
                                                    <tr className="bg-white border">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Name</td>
                                                        {data.map((item, index) => (
                                                            <td key={index} className="px-2 border py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {item.name}
                                                            </td>
                                                        ))}
                                                        {data.length <= 1 && (

                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                <div className="w-32 h-4 bg-slate-300 rounded-full"></div>
                                                            </td>
                                                        )}

                                                    </tr>
                                                    <tr className="bg-gray-200 border-b">
                                                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold tracking-wider text-gray-900">Storage</td>
                                                        {data.map((item, index) => (
                                                            <td key={index} className="px-2  py-4 whitespace-nowrap text-sm font-medium text-gray-900">

                                                            </td>
                                                        ))}

                                                        {data.length <= 1 && (
                                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold tracking-wider text-gray-900">

                                                            </td>
                                                        )}
                                                    </tr>
                                                    <tr className="bg-white border-b">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Internal memory</td>
                                                        {data.map((item, index) => (
                                                            <td key={index} className="px-2 border py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {item.storage}
                                                            </td>
                                                        ))}

                                                        {data.length <= 1 && (
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                <div className="w-20 h-4 bg-slate-300 rounded-full"></div>
                                                            </td>
                                                        )}
                                                    </tr>

                                                    <tr className="bg-white border-b">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Price</td>
                                                        {data.map((item, index) => (
                                                            <td key={index} className="px-2 border py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {item.price}
                                                            </td>
                                                        ))}

                                                        {data.length <= 1 && (

                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                <div className="w-20 h-4 bg-slate-300 rounded-full"></div>
                                                            </td>
                                                        )}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-span-1">
                        <h2 className="text-2xl font-semibold pb-2">Add product</h2>
                        <div className="relative mb-3">
                            <input
                                className="text-xl appearance-none border pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-1.5  text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                                id="username"
                                type="search"
                                placeholder="Search..."
                            />
                            <div className="absolute right-0 inset-y-0 flex items-center">
                                <XIcon className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500" />
                            </div>

                            <div className="absolute left-0 inset-y-0 flex items-center">
                                <SearchIcon className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            {data.map((item, index) => (
                                <div key={index} className="grid grid-cols-3 gap-2 hover:cursor-pointer   hover:shadow-md duration-300 rounded-2xl">
                                    <div className="col-span-1 p-0.5  w-20 bg-slate-100 rounded-2xl">
                                        <img className="object-cover h-full w-full hover:scale-110 duration-300 rounded-xl" src={item.image} alt="Converse sneakers" />
                                    </div>
                                    <div className="col-span-2 grid items-center">
                                        <div className="text-base text-gray-500 font-semibold">Iphone 15 pro max</div>
                                        <div className="flex items-center space-x-2">

                                            <div className="flex items-center space-x-2">
                                                <StarIcon className="h-4 w-4 text-yellow-500" />
                                                <StarIcon className="h-4 w-4 text-yellow-500" />
                                                <StarIcon className="h-4 w-4 text-yellow-500" />
                                                <StarIcon className="h-4 w-4 text-yellow-500" />
                                                <StarIcon className="h-4 w-4 text-gray-500" />
                                            </div>
                                            <div className="text-base text-gray-500">4.2</div>
                                        </div>
                                        <div className="text-base font-semibold">{item.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Compare;