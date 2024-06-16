import "./App.css";
import Advantages from "./components/Advantages";
import Companies from "./components/Companies";
import CreateAccount from "./components/CreateAccount";
import HowItWork from "./components/HowItWork";
import YourPhone from "./components/YourPhone";

function App() {
  return (
    <>
      {" "}
      <Advantages />
      <HowItWork />
      <Companies />
      <CreateAccount />
      <YourPhone />
    </>
  );
}

export default App;
