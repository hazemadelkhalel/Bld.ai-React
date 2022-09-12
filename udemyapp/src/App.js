import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Nav from "./components/Nav";  
import Footer from "./components/footer";
import CreatePage1 from "./components/Page1";
import CreatePage2 from "./components/Page2";
function App() {
  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CreatePage1/>}/>
          <Route exact path="/course" element={<CreatePage2/>}/>
        </Routes>
        </BrowserRouter>
      </>
  );
}

  
export default App;