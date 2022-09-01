import './App.css';


import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slides from "./Components/Slides/Slides";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Top10Movies from "./Components/TopMovies/Top10Movies";
import AllCategories from './Components/Categories/Card';
import Footer from "./Components/Footer/Footer";
import SearchBar from "./Components/SearchBar/SearchBar";
import Movie from "./Components/Movie/Movie";
import FullDetail from "./Components/FullDetails/FullDetail";
import Upload from "./Components/UploadShow/Upload";
import Comments from "./Components/CommentsSection/Comments";
import Login from './Components/Security/Login';
import LoginContext from './context/loginContext';
import PrivateRouter from './Components/Security/PrivateRouter';
import PrivateLogin from './Components/Security/PrivateLogin';
import SignUp from './Components/Security/SignUp';
import NewMapApi from './Components/NewsSection/NewMapApi';
import PageNotFound from './Components/Exception/PageNotFound';
import Profile from './Components/Security/Profile';
import PrivateProfileRoute from './Components/Security/PrivateProfileRoute';
import { ToastContainer} from 'react-toastify';
function App() {
  
  return (
    <div className="App">
        <LoginContext.Provider value={{name:"Login/SignUp",
        status:JSON.parse(localStorage.getItem('isLogin')),
        userName:localStorage.getItem('userName'),
        isAdmin:JSON.parse(localStorage.getItem('isAdmin')),
        link:''
      }}>
        <ToastContainer/>
        <Router>
        
        <NavigationBar  />
            <Routes>
                <Route path={"/*"} element={<><Slides/><Top10Movies/><NewMapApi/></>}/>
                <Route path={"comments"} element={<Comments/>}/>
                <Route path={"error404"} element={<PageNotFound/>}/>
                <Route path="search" element={<SearchBar/>} />
                <Route path="categories" element={<AllCategories/>}/>
                <Route path="movie/:path/:id/:title" element={<Movie/>} />
                <Route path="show/:id" element={<FullDetail /> }/>
                <Route path="profile/:userName" element={
                  <PrivateProfileRoute>
                  <Profile/>
                </PrivateProfileRoute>
                }/>
                <Route path="login" element={
                  <PrivateLogin>
                  <Login/>
                </PrivateLogin>
                }/>
                <Route path="signUp" element={
                  <PrivateLogin>
                    <SignUp/>
                  </PrivateLogin>
                } />
                <Route path={"/uploadShow"} element={
                <PrivateRouter>
                  <Upload/>
                </PrivateRouter>
                
                }/>

            </Routes>
            <Footer/>
        </Router>
        </LoginContext.Provider>
      </div>
  );
}

export default App;
