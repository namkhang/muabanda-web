import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { url } from '../../url';
import Footer from '../Footer';
import Loading from '../Loading/Loading';
import MenuforAdmin from '../MenuforAdmin';
import ProductforAdmin from './SanphamforAdmin';

const DetailpageforAdmin = () => {
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

    
    if(Cookies.get('adminID')){

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
                    <MenuforAdmin />
                   <ProductforAdmin item={item}   title='SẢN PHẨM LIÊN QUAN' data = {relateItem} />
                   <Footer />
                </div>
            );
        }
        
    }
    else{
        window.location.href = '/admin/login'
    }


}

export default DetailpageforAdmin;
