import React from 'react';
import './Category.css';
import crocs from '../../assets/images/crocs.png';
import abaya from '../../assets/images/abaya.png';
import more from '../../assets/images/lotsmore.png';
import Button from '../Button/Button';

const categories = [
  {
    title: 'Crocs',
      image: crocs
  },
  {
    title: 'Abayas',
    image: abaya
  },
  {
    title: 'Lots More',
    image: more
  }
];

const CategorySection = () => {
  return (
    <div className="category-section">
            <div className="card-container">
        {categories.map((category, index) => (
          <div className="card" key={index}>
            <img src={category.image} alt={category.title} />
            <h3 className="card-title">{category.title}</h3>
            <Button className="card-button" text= "Explore Collection" ></Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
