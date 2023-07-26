import React, { useState, useEffect } from 'react';
import '../style/pagesStyle/Home.css'
import Navbar from '../component/navbar';

function Home({items}) {
    return (
        <div className='home'>
            {/* <h1>Data JSON Looping</h1>
            <ul>
                {items.map((item) => (
                    <div key={item.id}>
                        <li >{item.name}</li>
                        <img src={item.images.png} alt="" />
                        <img src={item.images.webp} alt="" />
                        <p>{item.description}</p>
                    </div>
                ))}
            </ul> */}
            <Navbar/>
        </div>
    )
}

export default Home