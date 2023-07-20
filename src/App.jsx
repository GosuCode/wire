import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './HOC/navigation/Layout';
import Index from './component/Index';
import SinglePost from './component/singlePost/SinglePost';
import About from './component/pages/About';
import CreatePost from '../src/component/createPost/CreatePost'
import Login from './component/Authentication/Login';
import Register from './component/Authentication/Register';
import UpdatePost from './component/createPost/UpdatePost';
import 'react-loading-skeleton/dist/skeleton.css'
import "react-toastify/dist/ReactToastify.css";
import Profile from './component/pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/createPost' element={<CreatePost />} />
            <Route exact path='/updatePost/:id' element={<UpdatePost />} />
            <Route exact path='/postById/:id' element={<SinglePost />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
