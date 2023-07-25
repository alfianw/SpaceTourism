import React, { useState, useEffect } from 'react';

function Home({items}) {
    return (
        <div>
            <h1>Data JSON Looping</h1>
            <ul>
                {items.map((item) => (
                    <div key={item.id}>
                        <li >{item.name}</li>
                        <img src={item.images.png} alt="" />
                        <img src={item.images.webp} alt="" />
                        <p>{item.description}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Home