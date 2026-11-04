import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import JoseloNorma from "../pages/JoseluisNorma/JoseluisNorma";
// import OtraPareja from "../pages/OtraPareja/OtraPareja";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/joselo-&-norma" replace />}
        />

        <Route
          path="/joselo-&-norma"
          element={<JoseloNorma />}
        />
        <Route
          path="*"
          element={<Navigate to="/joselo-&-norma" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}