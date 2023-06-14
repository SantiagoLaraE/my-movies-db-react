import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
