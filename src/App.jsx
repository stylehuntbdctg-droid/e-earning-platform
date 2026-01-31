import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Categories from './pages/Categories';
import Instructors from './pages/Instructors';
import Blog from './pages/Blog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="courses" element={<Courses />} />
        <Route path="categories" element={<Categories />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;