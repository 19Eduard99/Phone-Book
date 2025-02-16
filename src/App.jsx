import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router";
import EditContact from "./routes/EditContact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit-contact/:id" element={<EditContact />} />
    </Routes>
  );
};

export default App;
