import { HashRouter, Routes, Route } from "react-router-dom";
import EntrySummary from "./pages/EntrySummary";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<EntrySummary />} />
        {/* TODO: Add error 404 Page */}
      </Routes>
    </HashRouter>
  );
}

export default App;