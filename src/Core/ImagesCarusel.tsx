import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

// import AutoScroll from "embla-carousel-auto-scroll"

const ImagesCarusel = ({ images, button = false }: { images: any, button: Boolean }) => {
    const plugin1 = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
        // AutoScroll({ loop: true, speed: 1, autoScroll: true }),
    )
    return (
        <Carousel
            plugins={[plugin1.current]}
            className="w-full"
            onMouseEnter={plugin1.current.stop}
            onMouseLeave={plugin1.current.play}
        >
            <CarouselContent>
                {images.map((item: any, index: number) => (
                    <CarouselItem key={index} className="p-0 m-0">
                        {/* <div className=" border bg-maincolor"> */}
                            {/* <Card> */}
                            {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                            {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                            <img className="w-full h-full object-cover" src={item} alt="Product Image" />
                            {/* </CardContent> */}
                            {/* </Card> */}
                        {/* </div> */}
                    </CarouselItem>
                ))}
            </CarouselContent>
            {!button && (
                <><CarouselPrevious /><CarouselNext /></>
            )}
        </Carousel>
    )
}

export default ImagesCarusel;