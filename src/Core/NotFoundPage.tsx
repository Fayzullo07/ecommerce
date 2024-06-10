import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold ">
                    404 - Page Not Found
                </h1>
                <Link to="/" className="text-blue-500 underline">
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage;