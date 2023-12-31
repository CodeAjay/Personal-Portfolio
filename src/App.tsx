import { Outlet } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./Components/Components.jsx";
// import CustomCursor from "./Components/CustomCursor";

function App() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
