import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickets/Tickets";
import TrackingCard from "./components/TrackingCard/TrackingCard";

function App() {
   const [progressCount, setProgressCount] = useState(0)

  return <>
  <Navbar></Navbar>
  <TrackingCard progressCount={progressCount}></TrackingCard>
  <Tickets setProgressCount={setProgressCount} progressCount={progressCount}></Tickets>
  </>;
}

export default App;
