import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickets/Tickets";
import TrackingCard from "./components/TrackingCard/TrackingCard";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  const [progressCount, setProgressCount] = useState(0);
  const [resolveCount, setResolveCount] = useState(0);


  return (
    <>
      <Navbar></Navbar>
      <TrackingCard
        progressCount={progressCount}
        resolveCount={resolveCount}
      ></TrackingCard>
      <Tickets
        setProgressCount={setProgressCount}
        progressCount={progressCount}
        setResolveCount={setResolveCount}
        resolveCount={resolveCount}
      ></Tickets>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
