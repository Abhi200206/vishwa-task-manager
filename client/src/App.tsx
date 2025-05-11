import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { View } from './pages/View';
import { Edit } from './pages/Edit';
import { Create } from './pages/Create';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/view' element={<View />} />
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
