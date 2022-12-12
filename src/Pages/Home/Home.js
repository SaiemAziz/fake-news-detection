import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header';

const Home = () => {
    let [news, setNews] = useState([])

    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data.slice(0,3)))
    },[])
    return (
        <div>
            <Header />
            <h1 className='text-6xl p-5 border-b-4'>Latest News</h1>
            <div className='grid grid-cols-3 gap-10 p-10'>
            {
                news.map(n => <div
                key = {n.id}
                className='card glass shadow-2xl overflow-hidden'
                >
                <img src={n.image} alt="" />
                    <h1 className='text-2xl font-bold p-5'>{n.title}</h1>
                    <h1 className='font-bold text-info px-5 text-right'>-{n.category.toUpperCase()}</h1>
                    <h1 className='italic font-semibold p-5'>{n.details.slice(0,200)}...</h1>
                </div>)
            }
            </div>
            <Link to='/blog' className="btn-link btn btn-info text-2xl w-fit mx-auto">See All</Link>
        </div>
    );
};

export default Home;