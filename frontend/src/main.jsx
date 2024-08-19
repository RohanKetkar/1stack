import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {Cookiecontextprovider} from "./page/context"

  ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Cookiecontextprovider>
    <Routes><Route path="*" element={<App />}/></Routes>
    <ToastContainer />
    </Cookiecontextprovider>
  </BrowserRouter>
)
