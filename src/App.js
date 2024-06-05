import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import ImageCreator from "./pages/ImageCreator";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="imageCreator" element={<ImageCreator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
