import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { JoseloNorma, InvitationGeneratorJoseloNorma }from "../pages";

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
          path="/invitation-generator-joselo-norma/admin"
          element={<InvitationGeneratorJoseloNorma />}
        />
        <Route
          path="*"
          element={<Navigate to="/joselo-&-norma" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}