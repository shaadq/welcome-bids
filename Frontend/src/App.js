import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
