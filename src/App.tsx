import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages";
import DefaultLayout from "./layout/default";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Dashboard />
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
