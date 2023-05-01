
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateItem from './component/CreateItem/CreateItem';
import Detailpage from './component/DetailPage/DetailPage';
import DetailpageforAdmin from './component/DetailPage/DetailPageforAdmin';
import EditItem from './component/EditItem/EditItem';
import Homepage from './component/HomePage/HomePage';
import HomepageforAdmin from './component/HomePage/HomePageForAdmin';
import Login from './component/Login/Login';
import Searchpage from './component/SearchPage/SearchPage';
import SearchpageforAdmin from './component/SearchPage/SearchPageforAdmin';



function App() {
  return (
    <div className="App">
       <Routes>
         <Route exact path='/' element={<Homepage></Homepage>} />
         <Route exact path='/detail/:id' element={<Detailpage></Detailpage>} />
         <Route exact path='/admin/detail/:id' element={<DetailpageforAdmin></DetailpageforAdmin>} />
         <Route exact path='/search' element={<Searchpage></Searchpage>} />
         <Route exact path='/admin/search' element={<SearchpageforAdmin></SearchpageforAdmin>} />
         <Route exact path='/admin/login' element={<Login></Login>} />
         <Route exact path='/admin' element={<HomepageforAdmin></HomepageforAdmin>} />
         <Route exact path='/admin/create-item' element={<CreateItem></CreateItem>} />
         <Route exact path='/admin/edit-item/:id' element={<EditItem></EditItem>} />
       </Routes>
    </div>
  );
}

export default App;
