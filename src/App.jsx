
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";

//TODO: Responsive and get icons social media
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
