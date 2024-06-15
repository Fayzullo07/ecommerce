import Container from "@/Core/Container";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { ShirtIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Home = () => {
    return (
        <div>
            <Hero />
            <ul className='list list-inline ml-auto filterTab mb-0 res-full'>


                <li className="list list-inline-item">
                    <a className={`cursor text-capitalize `}

                    >
                        cat
                    </a>
                </li>


            </ul>
            <div>
                <Container>
                    <div >
                        <ScrollArea className=" whitespace-nowrap ">
                            {Array.from({ length: 100 }, (_, index) => (
                                <div key={index} className=" inline-block mr-1 py-2 px-4 text-center cursor-pointer">
                                    <ShirtIcon className="h-5 w-5 mx-auto hover:scale-110 transition-all duration-300" />
                                    <p className="text-sm text-gray-600">Shirt lorem</p>
                                </div>
                            ))}
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>

                    </div>
                </Container>
            </div>
            <Products />
        </div>
    );
};

export default Home;