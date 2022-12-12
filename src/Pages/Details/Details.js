import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Shared/Header';

const Details = () => {
    let [news, setNews] = useState({})
    let location = useLocation()
    let id = location.pathname.replace('/details/','');
    id = parseInt(id)

    useEffect(()=>{
        fetch('/news.json')
        .then(res => res.json())
        .then(data => {
            let singleNews = data.find(n => n.id === id)
            setNews(singleNews)
        })
    },[])
    return (
        <div>
            <Header />
            <h1 className='text-6xl p-5 border-b-4'>Details</h1>
            <div
                className='card glass shadow-2xl overflow-hidden m-10'
                >
                <img src={news?.image} alt="" />
                    <h1 className='text-2xl font-bold p-5'>{news?.title}</h1>
                    <h1 className='font-bold text-primary-focus px-5 text-right'>{news?.category?.toUpperCase()}</h1>
                    <h1 className='italic font-semibold p-5'>{news?.details}</h1>
                </div>
        </div>
    );
};

export default Details;