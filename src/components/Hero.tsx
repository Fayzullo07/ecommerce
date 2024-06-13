import Container from "../Core/Container";

const Hero = () => {
    return (
        <main className=" bg-white relative overflow-hidden py-4">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 h-[95vh]">

                    <div className="grid grid-cols-2 grid-rows-3 gap-4">
                        <div className="col-span-2 row-span-2 border bg-blue-300">1</div>
                        <div className="row-start-3 border bg-pink-300">5</div>
                        <div className="row-start-3 border bg-pink-300">6</div>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-3 gap-4">
                        <div className="border bg-gray-300" >1</div>
                        <div className="row-span-2 col-start-1 row-start-2 border bg-red-300">2</div>
                        <div className="row-span-3 col-start-2 row-start-1 border bg-green-300">3</div>
                    </div>


                </div>
            </Container>
        </main>
    );
};

export default Hero;