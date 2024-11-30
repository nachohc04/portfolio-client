import React from "react";
import { Link } from "react-router-dom";

const FeaturedProjectCard = ({ name, description, id, index }) => {
    return (
        <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow h-80gi flex flex-col justify-between m-auto"
        >
            <div>
                <h3 className="text-2xl font-bold text-green-500 mb-3">
                    {name}
                </h3>
                <p className="text-gray-400 line-clamp-6 overflow-hidden">
                    {description}
                </p>
            </div>
            <Link
                to={`/projects/${id}`}
                className="mt-4 text-green-400 hover:text-green-300"
            >
                View Details →
            </Link>
        </div>
    );
};

export default FeaturedProjectCard;
