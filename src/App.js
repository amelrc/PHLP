import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const fetchedData = useFetch("https://randomuser.me/api/?results=20");

  return (
    <div className="App">
      <h1>Hello Beautiful Table</h1>

      <table>
        <thead>
          <tr>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Postcode</th>
          </tr>
        </thead>
        {fetchedData.map((item, ind) => (
          <tbody key={ind}>
            <tr>
              <td>{item.street}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.country}</td>
              <td>{item.postcode}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
