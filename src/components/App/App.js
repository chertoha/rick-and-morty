import CharacterPage from "pages/CharacterPage";
import HomePage from "pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;