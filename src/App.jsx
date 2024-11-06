import "./App.css";
import HomePage from "./components/pages/HomePage";
import ViewPostPage from "./components/pages/ViewPostPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<ViewPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
