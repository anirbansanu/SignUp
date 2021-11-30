import './App.css';
import NavBar from './component/NavBar';
import DashBoard from './component/admin/DashBoard';
import Products from './component/Products/Products';
import Home from './component/Home/Home';
import Posts from './component/Posts/UserPosts';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Users from "./component/admin/users";
import {UserPosts,PostList} from './component/admin/Posts';
import NoPage from './component/NoPage';

function App() {
  return ( 
    <>
      <BrowserRouter>
        <div style={{marginLeft: '20px'}}>
          <NavBar/>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/admin" element={<DashBoard />} >
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/posts" element={<PostList />} >
                  <Route path="/admin/posts/:id" element={<UserPosts />} />
                </Route>
              </Route>
              <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
