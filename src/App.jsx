import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarWrapper, Layout } from "./components";
import { Home, Collection } from "./pages";

function App() {
  const collections = [
    {
      name: "collection1",
    },
    {
      name: "collection2",
    },
    {
      name: "collection3",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex bg-[#fbfbfb] h-screen">
                <SidebarWrapper collections={collections} />
                <Home />
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div className="flex bg-[#fbfbfb] h-screen">
                <SidebarWrapper collections={collections} />
                <Home />
              </div>
            }
          />
          {collections.map((collection, index) => (
            <Route
              key={index}
              path={`/collection${index + 1}`}
              element={
                <div className="flex bg-[#fbfbfb] h-screen">
                  <SidebarWrapper collections={collections} />
                  <Collection collectionName={collection.name} />
                </div>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
