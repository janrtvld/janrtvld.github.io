// Global style
import GlobalStyle from "./components/GlobalStyle";
import "./App.css";
//Import pages
import Home from "./pages/Home/Home";
import Wave from "./components/Wave";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

import { useAnalytics } from "./hooks/useAnalytics";
import "dotenv/config";

function App() {
  const location = useLocation();
  useAnalytics();

  return (
    <div className="App">
      <GlobalStyle />
      <Wave />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
