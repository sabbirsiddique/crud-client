import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div>

          
            <Helmet>
                <title>EateryEvo | 404</title>
            </Helmet>
            <div className="h-screen flex flex-col justify-center items-center">
                <img src="https://i.ibb.co/rMgwpZT/404.gif" alt="" />
                <h1 className="text-7xl font-bold text-red-600">Oops...! Not Found Page(404)</h1>
            </div>
        </div>
    );
};

export default ErrorPage;