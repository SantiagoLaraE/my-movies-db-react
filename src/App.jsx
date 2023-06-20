import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import GenericMoviesPage from "./pages/GenericMoviesPage";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/categories/:categorySlug"
            element={<CategoriesPage />}
          />
          <Route path="/movies/:moviesType" element={<GenericMoviesPage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
