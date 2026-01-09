import React, { useEffect, useState } from 'react'

import Products from '../components/Products'
import API from '../baseUrl';

const Home = () => {

    const api= API;

    const[loading,setloading]=useState(false);

    const[posts,setposts]=useState([]);



    async function fetchData(){

        setloading(true);

        try {
            const data= await fetch(api);
            const output= await data.json();
            setposts(output);
        } catch (error) {

            alert("Error Occured in Fetching Data");
        }

        setloading(false);
    };

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='home-bar'>
        {
        posts.map((post)=>{
            return(
                <Products post={post} loading={loading} />
            )
        })
    }
    </div>
  )
}

export default Home
