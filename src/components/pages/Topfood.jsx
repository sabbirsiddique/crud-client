import { NavLink } from "react-router-dom";

const Topfood = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mt-8 mb-8">Top Selling Foods</h1>

            <div className="text-center">
            <NavLink to="/allfooditem"><button className="btn btn-outline btn-secondary text-center">See All</button></NavLink>
            </div>
        </div>
        
    );
};

export default Topfood;