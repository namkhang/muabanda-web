import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { url } from '../../url';
import Footer from '../Footer';
import MenuforAdmin from '../MenuforAdmin';

const CreateItem = () => {

    const [elementInput , setElementInput] = useState([0])

    async function createReport(){

            let formData = new FormData()
            formData.append("item_name" , document.getElementById("item_name").value)
            formData.append("item_quantity" , document.getElementById("item_quantity").value)
            formData.append("item_price" , document.getElementById("item_price").value)
            formData.append("category" , document.getElementById("category").value)
            formData.append("sub_catagory" , document.getElementById("sub_catagory").value)
            formData.append("status" , document.getElementById("status").value)
            elementInput.forEach((i) => {
                formData.append("file" , document.getElementById(`file${i}`).files[0])
            })

            let response = await axios.post(`${url}items/create-item` , formData , {
                headers : {
                    'Authorization' : `Bear ${localStorage.getItem('token')}`
                }
            })

            if(response.data.success){
                window.location.href = '/admin'
            }


    }

    function DeleteElement(){
        let newElement = [...elementInput]
        newElement.pop()
        setElementInput(newElement)
    }

    function AddElement(){
        let value = elementInput[elementInput.length - 1] 
        let newElement = [...elementInput]
        newElement.push(value + 1)
        setElementInput(newElement)
    }

    if(Cookies.get('adminID')){
        return (
            <div>
                <MenuforAdmin></MenuforAdmin>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Tạo Sản Phẩm</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item"> <a href="/admin">HOME</a> </li>
                                    <li className="breadcrumb-item active">Tạo Sản Phẩm</li>
                                </ol>
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <form className="needs-validation" >
                                            <div className="form-group">
                                                <label className="form-label">Tên Sản Phẩm</label>
                                                <input type="text" className="form-control" id="item_name" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Số lượng</label>
                                                <input type="text" className="form-control" id="item_quantity" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Gía</label>
                                                <input type="text" className="form-control" id="item_price" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Catagory</label>
                                                <input type="text" className="form-control" id="category" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Sub-Catagory</label>
                                                <input type="text" className="form-control" id="sub_catagory" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Trạng thái </label>
                                                <select defaultValue="0" id="status" className="form-select" aria-label="Default select example">
                                                    <option value="0"  disabled>Chọn trạng thái...</option>
                                                            <option value='Còn hàng'>Còn hàng</option>   
                                                            <option value='Hết hàng'>Hết hàng</option>          
                                                </select>
                                            </div>
   

                                         <div className="form-group">
                                         <label className="form-label">File</label>
                                                {elementInput.map(i1 =>
                                                 elementInput.length  === 1 ?  
                                                 <div className="input-group mb-3">    
                                                 <input  type="file" className="form-control" id={`file${i1}`} />
                                                 </div>
                                                        :
                                                <div className="input-group mb-3">
        
                                                         <input  type="file" className="form-control" id={`file${i1}`} />     
                                                        <div className="input-group-append">
                                                        <button className="btn btn-danger" onClick={DeleteElement} type="button"><i className="fas fa-times"></i> Delete</button> 
                                                        </div> 
                                                </div>
                                                    )}
                                    </div>

                                               
                                                <button type="button" onClick={AddElement} className="btn btn-success"><i className="fas fa-plus"></i> Add</button>
                                          
                                            
                                        </form>
                                    </div>
                                </div>
                   
                                <div className="row mt-4">
                                    <div className="col text-center">
                                        <button onClick={createReport} className="btn btn-primary" type="submit">Tạo sản phẩm</button>
                                    </div>
                                </div>            
                            </div>
                        </main>
    
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
    else{
        window.location.href = '/admin/login'
    }
 
}

export default CreateItem;
