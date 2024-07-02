import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "../header/Header";
import Tables from "../tables/Tables";


const RouterPage = () => {

  return (
       <>
       <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Tables/>} />
        </Routes>
       </Router>

       </>
  )
}

export default RouterPage