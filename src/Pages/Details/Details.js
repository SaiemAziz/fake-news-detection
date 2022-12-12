import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    let location = useLocation()
    let id = location.pathname.replace('/details/','');
    console.log(id);

    useEffect(
    ()=>{
        
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Details;