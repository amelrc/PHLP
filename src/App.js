import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const fetchedData = useFetch("https://randomuser.me/api/?results=20");

  const sortedData = fetchedData.sort((a, b) => {
    const countryA = a.country.toUpperCase();
    const countryB = b.country.toUpperCase();
    return countryA < countryB ? -1 : countryA > countryB ? 1 : 0;
  });

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
        <tbody>
          {sortedData.map((item, ind) => (
            <tr key={ind}>
              <td>{item.street}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td style={{ backgroundColor: "#00bcd4" }}>{item.country}</td>
              <td>{item.postcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
