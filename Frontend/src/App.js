import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
