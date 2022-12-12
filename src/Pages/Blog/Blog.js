import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header';

const Blog = () => {
    let [news, setNews] = useState([])

    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])

    return (
        <div>
            <Header />
            <h1 className='text-6xl p-5 border-b-4'>All News</h1>
            <div className='grid grid-cols-3 gap-10 p-10'>
            {
                news.map(n => <div
                key = {n.id}
                className='card glass shadow-2xl overflow-hidden'
                >
                <img src={n.image} alt="" />
                    <h1 className='text-2xl font-bold p-5'>{n.title}</h1>
                    <h1 className='font-bold text-primary-focus px-5 text-right'>{n.category.toUpperCase()}</h1>
                    <h1 className='italic font-semibold p-5'>{n.details.slice(0,200)}... <Link className='text-info' to={`/details/${n.id}`}>See More</Link></h1>
                </div>)
            }
            </div>
        </div>
    );
};

export default Blog;
