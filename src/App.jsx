import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Departments from "./pages/Departments.jsx";
import Department from "./pages/Department.jsx";
import Academics from "./pages/Academics.jsx";
import Students from "./pages/Students.jsx";
import StudentActivity from "./pages/StudentActivity.jsx";
import Infrastructure from "./pages/Infrastructure.jsx";
import Alumni from "./pages/Alumni.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import Naac from "./pages/Naac.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="departments" element={<Departments />} />
        <Route path="departments/:id" element={<Department />} />
        <Route path="academics" element={<Academics />} />
        <Route path="students" element={<Students />} />
        <Route path="students/:id" element={<StudentActivity />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="alumni" element={<Alumni />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="naac" element={<Naac />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
