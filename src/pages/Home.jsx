import React, { useState, useEffect } from 'react';
import '../style/pagesStyle/Home.css'
import ContenHome from '../component/ContenHome';

function Home({items}) {
    return (
        <div className='home'>
            <ContenHome/>
        </div>
    )
}

export default Home