import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { SlideshowLightbox } from "lightbox.js-react"
import { useRef, useState } from "react"

// import AutoScroll from "embla-carousel-auto-scroll"

const ImagesCarusel = ({ images, button = false }: { images: any, button: Boolean }) => {
    const plugin1 = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
        // AutoScroll({ loop: true, speed: 1, autoScroll: true }),
    )
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Carousel
            plugins={[plugin1.current]}
            className="w-full"
            onMouseEnter={plugin1.current.stop}
            onMouseLeave={plugin1.current.play}
        >
            <CarouselContent>
                <SlideshowLightbox
                    showThumbnails={true}
                    open={isOpen}
                    >
                    {images.map((item: any, index: number) => (
                         <img key={index} onClick={handleClick} className="w-full h-full object-cover" src={item} alt="Product Image" />
                    ))}
                </SlideshowLightbox>
                {images.map((item: any, index: number) => (
                    <CarouselItem key={index} className="p-0 m-0">
                        {/* <div className=" border bg-maincolor"> */}
                        {/* <Card> */}
                        {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                        {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                        <img onClick={handleClick} className="w-full h-full object-cover" src={item} alt="Product Image" />
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