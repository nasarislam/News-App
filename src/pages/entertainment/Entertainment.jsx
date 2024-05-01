import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function Entertainment() {
  const [api,setApi]=useState([])
  function fetchApi(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=2b6c9f87e92248a09e4aef7b37fbb327&category=entertainment").then((res)=>res.json()).then((res)=>setApi(res.articles))
  }
  const navigate=useNavigate();
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div className='parent'>
    <div className='entertainment'>
      {
       api?.map((item,index)=>{
        return(
          <a target='' key={index} href={item.url}>
          <div className='grid' key={index}>
          <img className="newsimg" src={item.urlToImage?item.urlToImage:'https://www.shutterstock.com/shutterstock/photos/549465907/display_1500/stock-vector-not-available-grunge-rubber-stamp-on-white-background-vector-illustration-549465907.jpg'} alt="" />
          <h5 onClick={()=>navigate("./NewsSite")}>{item.title} <p>{item.publishedAt}</p></h5>
          <hr />
          </div>
          </a>
        )
})
      }
  </div>
  </div>
  )}

export default Entertainment