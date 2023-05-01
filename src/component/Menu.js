import React from 'react';
function Menu(props) {

    function Search(){
        let query = document.getElementById("search").value
        window.location.href =`/?name=${query}`
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="/">Xưởng đá Cao Anh</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Menu
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/search?catagory=Tượng Phật">Tượng Phật</a>
                            <a className="dropdown-item" href="/search?catagory=Tượng công giáo">Tượng công giáo</a>
                            <a className="dropdown-item" href="/search?catagory=Tượng Đá Khác">Tượng Đá Khác</a>
                        </div>
                    </li>
      
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={Search} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
        </nav>
    );
}
export default Menu;