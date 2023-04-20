import { Routes, Route } from "react-router-dom"
import Index from "./pages/Index.jsx"
import Character from "./pages/Character.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/characters/:characterId" element={<Character />} />
    </Routes>
  );
}

export default App;