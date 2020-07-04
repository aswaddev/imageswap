import React, { useState, useEffect } from 'react';
import covid1 from './images/covid-19/1.jpg';
import covid2 from './images/covid-19/2.jpg';
import covid3 from './images/covid-19/3.jpg';
import covid4 from './images/covid-19/4.jpg';
import nature1 from './images/nature/1.jpg';
import nature2 from './images/nature/2.jpg';
import nature3 from './images/nature/3.jpg';
import nature4 from './images/nature/4.jpg';
import tech1 from './images/tech/1.jpg';
import tech2 from './images/tech/2.jpg';
import tech3 from './images/tech/3.jpg';
import tech4 from './images/tech/4.jpg';
import travel1 from './images/travel/1.jpg';
import travel2 from './images/travel/2.jpg';
import travel3 from './images/travel/3.jpg';
import travel4 from './images/travel/4.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [activeCategories, setActiveCategories] = useState([
    'Covid 19',
    'Nature',
  ]);

  // componentDidMount()
  // useEffect(() => {
  //   let temp  = activeCategories;
  //   setActiveCategories({});
  //   // eslint-disable-next-line
  // }, []);

  // componentDidUpdate()
  useEffect(() => {}, [activeCategories]);

  const handleClick = (e) => {
    if (activeCategories.includes(e.target.innerHTML)) {
      let filteredCategories = activeCategories.filter((category) => {
        return category !== e.target.innerHTML;
      });
      setActiveCategories(filteredCategories);
    } else {
      setActiveCategories([...activeCategories, e.target.innerHTML]);
    }
  };

  const categoryImages = {
    covid19: (
      <div className='d-flex mt-3'>
        <img className='w-25 mr-2' src={covid1} alt='' />
        <img className='w-25 mr-2' src={covid2} alt='' />
        <img className='w-25 mr-2' src={covid3} alt='' />
        <img className='w-25 mr-2' src={covid4} alt='' />
      </div>
    ),
    travel: (
      <div className='d-flex mt-3'>
        <img className='w-25 mr-2' src={travel1} alt='' />
        <img className='w-25 mr-2' src={travel2} alt='' />
        <img className='w-25 mr-2' src={travel3} alt='' />
        <img className='w-25 mr-2' src={travel4} alt='' />
      </div>
    ),
    technology: (
      <div className='d-flex mt-3'>
        <img className='w-25 mr-2' src={tech1} alt='' />
        <img className='w-25 mr-2' src={tech2} alt='' />
        <img className='w-25 mr-2' src={tech3} alt='' />
        <img className='w-25 mr-2' src={tech4} alt='' />
      </div>
    ),
    nature: (
      <div className='d-flex mt-3'>
        <img className='w-25 mr-2' src={nature1} alt='' />
        <img className='w-25 mr-2' src={nature2} alt='' />
        <img className='w-25 mr-2' src={nature3} alt='' />
        <img className='w-25 mr-2' src={nature4} alt='' />
      </div>
    ),
  };

  const categories = ['Covid 19', 'Nature', 'Technology', 'Travel'];

  return (
    <>
      <div className='py-2 bg-danger'>
        <h1 className='text-white text-center'>Images Swap</h1>
      </div>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-center mt-4'>
          {categories.map((category) => (
            <button
              onClick={handleClick}
              className={`btn mr-3 ${
                activeCategories.includes(category)
                  ? 'btn-secondary'
                  : 'btn-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='pb-3'>
          {activeCategories.map((category) => {
            return categoryImages[category.toLowerCase().replace(/ /g, '')];
          })}
        </div>
      </div>
    </>
  );
};

export default App;
