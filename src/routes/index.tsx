import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProjectLayout from '../components/ProjectLayout'
import Categories from '../pages/Categories'
import Products from '../pages/Products'
import Suppliers from '../pages/Suppliers'


function ProjectRoutes() {
    return (
        <Routes>
            <Route path='/' element={<ProjectLayout />}>
                <Route index element={<Categories />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/suppliers' element={<Suppliers />}></Route>
            </Route>
        </Routes>
    )
}

export default ProjectRoutes