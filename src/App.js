import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Movies from './Components/Movies/Movies';

function App() {

  let routes=createBrowserRouter([{
    path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'movies',element:<Movies/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'*',element:<NotFound/>},
    ]
  }


  ])

  return (
    <div className="App">
     <RouterProvider router={routes}>

     </RouterProvider>
    </div>
  );
}

export default App;
