import { categoriese } from "@/data/data";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Categories = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const query = useQuery();
    const selectedCategoryId = query.get('category_id');
    console.log(selectedCategoryId);

    useEffect(() => {
        // Yuklanish holatini ko'rsatish uchun timeoutdan foydalanamiz
        const loadData = async () => {
            setLoading(true);
            // Bu yerda sizning yuklanish jarayoningiz bo'lishi mumkin, masalan, API chaqiruvi
            await new Promise((resolve) => setTimeout(resolve, 300)); // 2 soniya kutish
            setLoading(false);
        };

        loadData();
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <h2 className="py-4 text-lg md:text-2xl font-bold"> {id}</h2>
                <div onClick={() => {
                    // goBack();
                    navigate("/")
                }} className="cursor-pointer hover:scale-125 duration-300 "  >
                    <XIcon className="text-black" />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 pb-6">
                {categoriese.map((item, index) => (
                    <div key={index}>
                        <Link to={`/categories/products`}>
                            <div className="p-4 bg-gray-200 rounded-lg h-40 ">

                                <img className="h-full  mx-auto hover:scale-105 duration-300" src="https://www.tailwind-kit.com/images/object/10.png" alt="" />
                            </div>
                        </Link>
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
    );
};

export default Categories;