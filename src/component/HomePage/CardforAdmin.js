import React from 'react';
function CardforAdmin({ title, data }) {

  return (
    <div className='container'>
      <h5 className='title-product-group mb-2'>{title}</h5>
      <div class="row">
        {data.map(i =>
          <div className="col-md-3">
            <div className="card">
              <a href={`/admin/detail/${i._id}`}>
                <div style={{ overflow: 'hidden' }} >
                  <img className="card-img-top" src={i.listImage[0].image} alt="" />
                </div>
              </a>
              <div className="card-body">
                <p className="card-text">{i.item_name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}

export default CardforAdmin;