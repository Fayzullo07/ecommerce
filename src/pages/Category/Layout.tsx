import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ShirtIcon, XIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import Categories from "./Categories";

const Layout = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const previousLocation = useRef<string | null>(null);

    console.log(previousLocation);

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
        navigate("/category/0");

    }, []);


    // let loc = navigate(-1);
    // setLoaction(loc);
    return (
        <div className="">
            <div className=" relative ">

                <div className="grid grid-cols-6 h-full botder-b-2">
                    <div className=" col-span-1 border-r-2 ">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Link to={`/category/${index}`} key={index} className={`${pathname.split("/")[2] == index.toString() ? "bg-gray-100" : ""} text-gray-600 text-lg flex items-center gap-2 py-2 px-4 hover:bg-gray-100 duration-300`}>
                                <ShirtIcon size={18} className="text-black" />
                                <span>Shirt {index}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="col-span-5 px-6 border-b-2">
                        <Routes>
                            <Route path="/:id" element={<Categories />} />
                        </Routes>
                    </div>
                </div>

                <div onClick={() => {
                    // goBack();
                    navigate("/")
                }} className=" absolute  top-5 right-5 cursor-pointer hover:scale-125 duration-300 "  >
                    <XIcon className="text-black" />
                </div>
            </div>


        </div>
    );
};

export default Layout;