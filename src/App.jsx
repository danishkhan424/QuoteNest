import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Routes/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
function App() {

  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  return isLoading ? <Loader /> : (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
