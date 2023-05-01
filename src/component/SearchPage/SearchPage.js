import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Card from '../HomePage/Card';
import Menu from '../Menu';
import axios from 'axios';
import { url } from '../../url';
import Contact from '../contact/Contact';
import { useLocation } from 'react-router-dom';
const Searchpage = () => {
const [item , setItem] = useState([])
let query = new URLSearchParams(useLocation().search)
let catagory = query.get("catagory")
console.log(catagory);
useEffect(()=> {
    async function getData(){
       
        if(catagory){
            const response = await axios.get(`${url}items/get-item-by-catagory?catagory=${catagory}`)
            setItem(response.data.data)
        }
        else{
            const response = await axios.get(`${url}items/find-all-item`)
            setItem(response.data.data)
        }
    
    }
    getData()
      
} , [])

    return (
        <div>
        <Menu/>
            <Card title='SẢN PHẨM' data={item}/>
            <Contact/>
          <Footer/>
        </div>
    );
}

export default Searchpage;
