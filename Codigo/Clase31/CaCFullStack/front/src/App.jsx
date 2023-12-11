import Show from "../components/Show";
import Create from "../components/Create";
import Edit from "../components/Edit";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
           <Route path = "/" element = {<Show/>}/>
           <Route path = "/create" element = {<Create/>}/>
           <Route path = "/edit/:id" element = {<Edit/>}/>
        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
};

export default App;
