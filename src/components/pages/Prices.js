import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Prices.css'


export const Prices = () => {
    const [info, setInfo]= useState();
    useEffect(()=>{
       const fetch=async()=>{
        const res= await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        setInfo(res.data.bpi);
       }
       fetch();
    },[])
  return (
    <>
    <div className='cont'>
        <p className='topic'>CRYPTOCURRENCY PRICES</p>
    </div>
    <div className='all'>{info && Object.keys(info).map((key) => (
        <div key={key} className='cards'>
            <p className='title'> {info[key].code}</p>
            <p className='rate'> {info[key].rate}</p>
        </div>
    ))}</div>
    </>
    
  )
}

