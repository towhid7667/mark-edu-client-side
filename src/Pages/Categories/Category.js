import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({options}) => {
    // console.log(options)
    const {category, id} = options;
    return (
        <div>
            <Link to={`/category/${id}`} className=' border-2 border-white-800 text-3xl flex flex-col text-center text-white px-5 py-2 rounded-lg my-3 hover:text-blue-700 font-bold uppercase'>{category}</Link>
        </div>
    );
};

export default Category;