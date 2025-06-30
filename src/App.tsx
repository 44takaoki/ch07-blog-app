import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import TopPage from "./components/TopPage";
import PostsDetailPage from "./components/PostDetailPage";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className=" bg-slate-600 p-4 ">
        <div className="flex justify-between mx-auto container items-center">
          <h1 className="text-2xl text-white font-semibold">Blog</h1>
          <Link to={"/contact"}>
            <p className="text-base text-white">お問い合わせ</p>
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/posts/:id" element={<PostsDetailPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
