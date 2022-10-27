import React from 'react';

import Category from './Category';

const Categories = ({category}) => {
   
    // console.log(category)
    return (
        <div className='my-10'>
            {
                    category.map(options => <Category key = {options.id} options ={options}></Category>)
            }
        </div>
    );
};

export default Categories;