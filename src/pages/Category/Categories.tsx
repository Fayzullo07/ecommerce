import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

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
            <h2 className="py-4 text-lg md:text-2xl font-bold">Mobile va Aksesuarlar {id}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 pb-6">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index}>
                        <div className="p-4 bg-gray-200 rounded-lg h-40 ">

                            <img className="h-full  mx-auto hover:scale-105 duration-300" src="https://www.tailwind-kit.com/images/object/10.png" alt="" />
                        </div>
                        <div className=" py-2">
                            <h2 className="text-lg tracking-wide font-bold">Kiyiladigan buyumlar</h2>
                            <p className="text-sm text-gray-900">Lorem ipsum</p>
                            <p className="text-sm text-gray-900">lorem ipsum</p>
                            <p className="text-sm text-gray-900">Lorem ipsum</p>
                            <p className="text-sm text-gray-900">lorem ipsum</p>
                            <p className="text-sm text-gray-900">lorem ipsum</p>

                        </div>
                    </div>
                ))}



            </div>
        </div>
    );
};

export default Categories;