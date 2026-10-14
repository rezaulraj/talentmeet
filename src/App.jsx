import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import SolutionPage from "./pages/SolutionPage";
import TalkToSales from "./pages/TalkToSales";
import ResourcesHub from "./pages/resources/ResourcesHub";
import Blog from "./pages/resources/Blog";
import HelpCenter from "./pages/resources/HelpCenter";
import Guides from "./pages/resources/Guides";
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/solutions/:slug" element={<SolutionPage />} />
            <Route path="/contact-sales" element={<TalkToSales />} />
            <Route path="/resources" element={<ResourcesHub />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
