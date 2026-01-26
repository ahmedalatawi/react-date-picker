import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { GettingStarted } from "./pages/GettingStarted";
import { Installation } from "./pages/Installation";
import { Examples } from "./pages/Examples";
import { API } from "./pages/API";
import { Themes } from "./pages/Themes";
import { Accessibility } from "./pages/Accessibility";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="installation" element={<Installation />} />
        <Route path="examples" element={<Examples />} />
        <Route path="api" element={<API />} />
        <Route path="themes" element={<Themes />} />
        <Route path="accessibility" element={<Accessibility />} />
      </Route>
    </Routes>
  );
}

export default App;
