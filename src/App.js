import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Book from "./Components/Books/Book";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Components/student/Student";

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path="/Product" element={<Product/>}> </Route>
      <Route path="/home" element={<Home pp="blah blah"/>}> </Route>
      <Route path="/" element={<Login a="WELCOME TO BLAH"/>}> </Route>
      <Route path="/Student" element={<Student method='post'/>}> </Route>
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
