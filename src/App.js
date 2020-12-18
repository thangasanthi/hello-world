import "./App.css";
import { Provider } from "react-redux";
import HelloOne from "./components/container/HelloOne";
import store from "./components/redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HelloOne />
      </Provider>
    </div>
  );
}

export default App;
