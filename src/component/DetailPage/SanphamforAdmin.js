import axios from 'axios';
import React, {useState } from 'react';
import { url } from '../../url';
import Contact from '../contact/Contact';
import CardforAdmin from '../HomePage/CardforAdmin';
function ProductforAdmin({item ,title , data}) {


  async function RemoveItem(){
      let check = window.confirm('Bạn chắc muốn xóa chứ ?')
      if(check === true){
          let response = await axios.delete(`${url}items/remove-item/${item._id}`, {
            headers : {
              'Authorization' : `Bear ${localStorage.getItem('token')}`
            }
          })
          console.log(response);
          if(response.data.success){
            window.location.href = '/admin'
          }
      }
  }


  return (
    <>
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-md-5">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">

              {item.listImage.map((i ,idx) => 
              idx === 0 ?
                <div class="carousel-item active">
                <img src={i.image} class="d-block w-100" alt="..." />
              </div>
              :
              <div class="carousel-item">
                <img src={i.image} class="d-block w-100" alt="..." />
              </div>
              )} 
                
              

              </div>
              <button  class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </button>
              <button  class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </button>
            </div>
          </div>
          <div className=' col-md-7 text-left'>
            {/* breadcrumb */}
            <nav aria-label="breadcrumb pl-0">
              <ol className="breadcrumb pl-0">
                <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            {/* Form */}
            <div className='Title-product mb-2'>
            <button onClick={() => window.location.href = `/admin/edit-item/${item._id}`} type="button" class="btn btn-success">Chỉnh sửa</button>
            <button onClick={RemoveItem} type="button" class="btn btn-danger">Xoá</button>
              <h5>{item.item_name}</h5>
            </div>
            <p>{item.item_description}</p>
            {/* description */}
            <div className='description mt-3'>
              <div className='Title-product mb-2'>
                <h6>TẠI SAO CHỌN CHÚNG TÔI</h6>
              </div>
              <p><b>1.</b> 100% đá tự nhiên, nguyên khối - Đá được chọn lựa nguyên khối trước khi gia công, không nứt bể ghép nối (được xem đá trước khi tạc tượng) sẽ bền đẹp theo thời gian.</p>
              <p><b>2.</b> Điêu khắc theo tỷ lệ chuẩn - Với đội ngũ nghệ nhân lành nghề chuyên môn hóa cho từng loại tượng (Công giáo, Phật, Linh vật, nghệ thuật), tượng được tạc chi tiết với tỷ lệ chuẩn, tinh xảo tạo nên những tác phẩm có hồn.</p>
              <p><b>3.</b>  Vận chuyển lắp đặt - Tượng sẽ được vận chuyển tận nơi quý khách yêu cầu và lắp đặt trên toàn quốc và quốc tế.</p>
              <p><b>4.</b>  Hoàn tiền 100% - Sản phẩm không đúng chất lượng, (đá ghép hư bể) không như cam kết, chúng tôi cam kết hoàn tiền đến 100%.</p>
              <div className='Title-product mb-2'>
                <h6>THÔNG TIN TƯ VẤN</h6>
              </div>
              <p><b>- </b>Quý khách sẽ được tư vấn nhiệt tình kĩ càng về kích thước, loại đá, giá cả,... phù hợp với yêu cầu nơi đặt tượng.</p>
              <p><b>- </b><a href='https://www.messenger.com/t/100035577761788' target='_blank'>Messenger Đá mỹ nghệ Cao Anh</a></p>
              <p><b>- </b> <a href='tel:0799342172'>0799342172 Mr Khang</a> <a href='https://zalo.me/0799342172'>(zalo)</a></p>
              <p><b>- </b> <a href='https://zalo.me/0799342172'>(zalo)</a></p>
            </div>
          </div>
        </div>

        <CardforAdmin title={title} data={data} />

      </div>
      <Contact/>
    </>
  );
}

export default ProductforAdmin;