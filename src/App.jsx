import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { PlanPage } from "./pages/PlanPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
