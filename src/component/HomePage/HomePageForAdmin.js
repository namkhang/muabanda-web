import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Card from './Card';
import axios from 'axios';
import { url } from '../../url';
import Contact from '../contact/Contact';
import { useLocation } from 'react-router-dom';
import MenuforAdmin from '../MenuforAdmin';
import Cookies from 'js-cookie';
import CardforAdmin from './CardforAdmin';
import Loading from '../Loading/Loading';
const HomepageforAdmin = () => {
const [item , setItem] = useState([])
let query = new URLSearchParams(useLocation().search)
const[loading , setLoading] = useState(true)

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
        if(Cookies.get("adminID")){
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
                    <MenuforAdmin/>
                        <CardforAdmin title='SẢN PHẨM' data={item}/>
                        <Contact/>
                      <Footer/>
                    </div>
                );
            }
            
        }
        else{
            window.location.href = "/admin/login"
        }

 
}

export default HomepageforAdmin;
