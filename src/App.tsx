import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import GroupCard from "./components/cards/groupCard";
import Footer from "./components/footer";
import CreatePost from "./components/pages/createPost";
import DeletePost from "./components/pages/deletePost";
import ReadPost from "./components/pages/readPost";

function App() {
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="blogReact/"
          element={
            <div>
              <GroupCard />
            </div>
          }
        ></Route>
        {isLocalhost && (
          <>
            <Route path="blogReact/create" element={<CreatePost />}></Route>
            <Route path="blogReact/delete" element={<DeletePost />}></Route>
          </>
        )}
        <Route path="/read/:id" element={<ReadPost />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
