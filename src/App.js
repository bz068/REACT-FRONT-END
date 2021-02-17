import axios from "axios";
import { MainProvider } from "./context/mainContext";
import Router from "./Router";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <MainProvider>
        <Router />
      </MainProvider>
    </>
  );
}

export default App;
