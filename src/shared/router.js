import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home";
import Detail from "../page/detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
