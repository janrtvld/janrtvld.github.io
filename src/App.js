// Global style
import GlobalStyle from "./components/GlobalStyle";

//Import pages
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import Wave from "./components/Wave";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Wave />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/experience" exact>
          <Experience />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
