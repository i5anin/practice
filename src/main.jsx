import Blog from './Blog.jsx'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Blog/>
    </BrowserRouter>,
)
