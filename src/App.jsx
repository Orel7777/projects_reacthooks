import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './comps/Navbar/Navbar'
import AppGraph from './comps/Graphs/AppGraph'
import Map from './comps/Maps/Map'
import Maps2 from './comps/Maps2/Maps2';
import AddressSearch from './comps/AddressSearchMap/AddresSearch';
import Weather from './comps/Weather/Weather';
import AppVodMovies from './comps/VodMovies/AppVodMovies';
import VodInfo from './comps/VodMovies/VodInfo'
import AppToDo from './comps/ToDoList/AppToDo';
import AppContextToDo from './comps/ToDoListContex/AppContextToDo';
import Graph from './comps/Graph/Graph';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {



  return (
    <div className="container">
    <BrowserRouter>
    <ToastContainer/>
      <Navbar/>
      <hr />
    <Routes>
      <Route index element={<AppGraph/>}/>
      <Route path="/maps" element={<Map/>}/>
      <Route path='/maps2' element={<Maps2/>}/>
      <Route path='/addressSearch' element={<AddressSearch/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/vodMovies' element={<AppVodMovies/>}/>
        <Route path='/vodMovies/info/:id' element={<VodInfo/>}/> 
      <Route path='/todolist' element={<AppToDo/>}/>
      <Route path='/appContexToDo' element={<AppContextToDo/>}/>
      <Route path='/*' element={<div>
        <h1 className='text-center my-5'>404 Page Not Found</h1>
      </div>}/>
      <Route path='/graph2' element={<Graph/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
