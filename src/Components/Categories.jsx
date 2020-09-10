import React from 'react';

const Categories = React.memo(({activeItem, items, onClickItem }) => {

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={()=>{onClickItem(null)}}>Все</li>
                {items && items.map((name, index) => (
                    <li className={activeItem === index ? 'active' : ''} onClick={()=>{onClickItem(index)}} key={index + name}>{name}</li>
                ))}
            </ul>
        </div>
    );
})

export default Categories;