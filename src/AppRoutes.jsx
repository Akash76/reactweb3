import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const LandingPage = lazy(() => import("./containers/LandingPage"));
const Dashboard = lazy(() => import("./containers/Dashboard"));
const NotFound = lazy(() => import("./containers/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <UnauthenticatedRoute>
              <LandingPage />
            </UnauthenticatedRoute>
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <AuthenticatedRoute>
              <Dashboard />
            </AuthenticatedRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
