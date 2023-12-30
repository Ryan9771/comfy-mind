import { HashRouter, Routes, Route } from "react-router-dom";
import EntrySummary from "./pages/EntrySummary";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<EntrySummary />} />
        {/* TODO: Add error 404 Page */}
      </Routes>
    </HashRouter>
  );
}

export default App;