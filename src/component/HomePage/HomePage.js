import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Footer';
import Card from './Card';
import Menu from '../Menu';
import axios from 'axios';
import { url } from '../../url';
import Contact from '../contact/Contact';
import { useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
const Homepage = () => {

let test = useRef(0)

const [item , setItem] = useState([])
const[loading , setLoading] = useState(true)
let query = new URLSearchParams(useLocation().search)

useEffect(()=> {
    async function getData(){
        let name = query.get("name")
        if(name){
            const response = await axios.get(`${url}items/find-item-by-name?name=${name}`)
            setItem(response.data.data)
            setLoading(false)
        }
        else{
            const response = await axios.get(`${url}items/find-all-item`)
            setItem(response.data.data)
            setLoading(false)
        }
    
    }
    getData()
      
} , [])

if(loading){
    return (
        <>
        <Loading /> 
        </>
    )

}
else{
    return (
        <div>
        <Menu/>
            <Card title='SẢN PHẨM' data={item}/>
            <Contact/>
          <Footer/>
        </div>
    );
}

    
}

export default Homepage;
