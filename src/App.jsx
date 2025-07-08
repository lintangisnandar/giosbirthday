
import { useState } from "react";
import Landing from "./pages/Landing";
import Timeline from "./pages/Timeline";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {started ? <Timeline /> : <Landing onClickStart={() => setStarted(true)} />}
    </>
  );
}

export default App;
