import { lazy, Suspense } from "react";

import { Center, Container, Loader } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SiteHeader } from "src/components";

const Layouts = lazy(() => import("./pages/Layouts"));
const Cards = lazy(() => import("./pages/Cards"));
const Lists = lazy(() => import("./pages/Lists"));
const Forms = lazy(() => import("./pages/Forms"));
const Home = lazy(() => import("./pages/Home"));
const Menus = lazy(() => import("./pages/Menus"));
const Errors = lazy(() => import("./pages/Errors"));

function Router() {
  const Load = (
    <Center mt={10} pt={50}>
      <Loader />
    </Center>
  );

  return (
    <BrowserRouter>
      <SiteHeader />
      <Container size="lg">
        <Suspense fallback={Load}>
          <Routes>
            <Route path="/layouts" element={<Layouts />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/errors" element={<Errors />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
