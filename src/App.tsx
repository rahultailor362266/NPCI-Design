import './App.css'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "swiper/css";
import "swiper/css/pagination";

function App() {
const routes = [
    { path: '/login', element: <Login /> },
 
];
  return (
    <>
     <BrowserRouter>
        <Routes>
              {routes.map(({ path, element }) => (
                <Route
                key={path}
                path={path}
                element={ element}
                />
              ))}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
