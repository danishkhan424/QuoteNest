import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Routes/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
