import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'
import Contact from './Components/Contact/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='about/' element={<About />} />
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />} />  /* read more on this */
      </Route>
      {/* <Route path='Github' element={<Github />}></Route> */}
      <Route
        loader={githubInfoLoader}
        path='Github'
        element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
