import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Tv from "./Pages/Tv/Tv";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/tv" component={Tv}></Route>
            <Route path="/search" component={Search}></Route>
          </Switch>
        </Container>
      </div>

      <Nav />
    </BrowserRouter>
  );
}

export default App;
