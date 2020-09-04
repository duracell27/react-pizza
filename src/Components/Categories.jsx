import React from 'react';

const Categories = ({ items, onClick }) => {
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((name, index) => (
                    <li onClick={()=>{onClick(name)}} key={index + name}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;