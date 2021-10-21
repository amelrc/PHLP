import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const fetchedData = useFetch("https://randomuser.me/api/?results=20");

  console.log("app", fetchedData);

  return (
    <div className="App">
      <h1>Hello There</h1>
    </div>
  );
}

export default App;
