import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import InventaryPage from './Component/InventaryPage'
import NewInventaryPage from './Component/NewInventaryPage'


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/inventary' element={<InventaryPage />} />
                <Route path='/inventary/NewInventaryPage' element={<NewInventaryPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
