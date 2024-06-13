import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ShirtIcon } from "lucide-react";
import { useEffect } from "react";
import Categories from "./Categories";
import { categories } from "@/data/data";

const Layout = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    console.log(pathname.split("/"));

    // const goBack = () => {
    //     if (previousLocation.current) {
    //         navigate(previousLocation.current);
    //     } else {
    //         navigate(-1);
    //     }
    // };

    // const savePreviousLocation = () => {
    //     previousLocation.current = window.location.pathname;
    // };
    useEffect(() => {
        navigate(`/category/${categories[0].name}/?category_id=${categories[0].category_id}`);

    }, []);


    // let loc = navigate(-1);
    // setLoaction(loc);
    return (
        <div className="">
            <div className=" relative ">

                <div className="grid grid-cols-6 h-full botder-b-2">
                    <div className="col-span-6 lg:col-span-1 md:col-span-2  border-r-2 ">
                        {categories.map((item, index) => (
                            <Link to={`/category/${item.name}/?category_id=${item.category_id}`} key={index} className={`${pathname.split("/")[2] == item.name.split(" ").join("%20") ? "bg-gray-100" : ""} text-gray-600 text-lg flex items-center gap-2 py-2 px-4 hover:bg-gray-100 duration-300`}>
                                <ShirtIcon size={18} className="text-black" />
                                <span className="text-lg font-medium">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="col-span-6 lg:col-span-5 md:col-span-4  px-6 border-b-2 hiddn sm:bock">
                        <Routes>
                            <Route path="/:id" element={<Categories />} />
                        </Routes>
                    </div>
                </div>

                
            </div>


        </div>
    );
};

export default Layout;