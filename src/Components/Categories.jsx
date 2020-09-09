import React from 'react';

const Categories = React.memo(({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState(null)

    const ActiveHandler = (index) =>{
        setActiveItem(index)
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={()=>{ActiveHandler(null)}}>Все</li>
                {items && items.map((name, index) => (
                    <li className={activeItem === index ? 'active' : ''} onClick={()=>{ActiveHandler(index)}} key={index + name}>{name}</li>
                ))}
            </ul>
        </div>
    );
})

export default Categories;