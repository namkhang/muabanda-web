import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { url } from '../../url';
import Footer from '../Footer';
import Loading from '../Loading/Loading';
import Menu from '../Menu';
import Product from './Sanpham';

const Detailpage = () => {
    const {id} = useParams()
    const [item , setItem] = useState({listImage : []})
    const [relateItem , setRelateItem] = useState([])
    const[loading , setLoading] = useState(true)

    useEffect(()=> {
            async function getData(){
                    let resItem = await axios.get(`${url}items/get-one-item/${id}`)
                    let resRelateItem = await axios.get(`${url}items/get-item-by-subcatagory` , {
                        params : {
                            subcatagory : resItem.data.data.sub_catagory
                        }
                    })

                    setItem(resItem.data.data)
                    setRelateItem(resRelateItem.data.data)
                    setLoading(false)
                
            }
            getData()
    } , [id])

    
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
                <Menu />
               <Product item={item}   title='SẢN PHẨM LIÊN QUAN' data = {relateItem} />
               <Footer />
            </div>
        );
    }
   
}

export default Detailpage;
