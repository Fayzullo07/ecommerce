import { useParams } from "react-router-dom";

const PageTest = () => {
    const { id } = useParams();
    return (
        <div className="h-screen bg-red-200">
            <h1>Page Test {id}</h1>
        </div>
    );
};
export default PageTest;