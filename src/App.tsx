import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CollectionDetails from "./pages/CollectionDetails";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <MainLayout>

      <Routes>

   <Route path="/" element={<Home />} />

<Route
  path="/collections"
  element={<Collections />}
/>

<Route
  path="/collections/:key"
  element={<CollectionDetails />}
/>

<Route
  path="/about"
  element={<About />}
/>

<Route
  path="/contact"
  element={<Contact />}
/>
<Route
  path="*"
  element={<NotFound />}
/>

      </Routes>

    </MainLayout>
  );
}

export default App;

//npm install framer-motion