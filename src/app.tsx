import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/userList" element={<div>l</div>}/>
          <Route path="/createUser" element={<div>c</div>}/>
          <Route path="/EditUser" element={<div>u</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
