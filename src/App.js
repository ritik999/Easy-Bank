import react from "react";
import { Switch, Route} from "react-router-dom";
import Home from "./components/Home";

const App=()=>{
  return(
    <>
    <Home />
    {/* <Switch>
      <Route exact path="/" component={Home} />
    </Switch> */}
    </>
  )
}

export default App;