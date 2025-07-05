import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<Home />} />
          {/* Add more routes here as needed */}
          {/* Example: <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
