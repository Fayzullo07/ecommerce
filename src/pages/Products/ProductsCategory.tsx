import Container from "@/Core/Container";
import { LayoutGridIcon } from "lucide-react";

const ProductsCategory = () => {
    return (
        <>
            <div className="bg-white pt-10">

                <Container>
                    <div className="flex items-center justify-between">
                        <div>10 ta</div>
                        <div>
                            <LayoutGridIcon />
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">

                    
                </div>
            </div>
        </>
    )
}

export default ProductsCategory;