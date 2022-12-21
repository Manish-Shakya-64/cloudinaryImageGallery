import React from "react";
import "./style.css"
import nature from '../assets/nature.jpg' 
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {Image} from 'cloudinary-react';

const Home = () => {

  const [imageIds , setImageIds] = useState();

  const loadImages = async () => {
    try {
      console.log("inside imageLoad function")
      const res = await fetch('http://localhost:5000/api/images');
      const data = await res.json();
      // console.log(data)
      setImageIds(data)
      
    } catch (error) {
      // console.log("error:::--->" ,error)
    }
  }

  useEffect(()=>{
    loadImages();
  },[])

  return (
    <div>
      <div className="home">
        <div className="imageDiv">
          
            {imageIds && imageIds.map((imageId,index)=>(
              <Image
              key={index}
              cloudName="dmf5izcyi"
              publicId = {imageId}
              // width = "250"
              // height = "150"
             
              />
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default Home;
