import React from "react"
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Exer from './pages/exercise'
import Footer from './components/Footer'
const App=()=>{
    return(
        <>
        {/* // <div>
        //     <BrowserRouter>
        //             <h1>Hello mate</h1>
        //             <Routes>
        //                 <Route path="/" element={<Home/>}></Route>
        //             </Routes>
        //         </BrowserRouter>
        // </div> */}
            <BrowserRouter>
                <Box> 
                <Navbar></Navbar>
                         <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/exercise/:id' element={<Exer/>}></Route>
                    </Routes>
                <Footer></Footer> 
                </Box> 
            </BrowserRouter>
        </>
    )
}
export default App