import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const locations = [];
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.results.map((res) =>
          locations.push({
            street: res.location.street.name + " " + res.location.street.number,
            city: res.location.city,
            state: res.location.state,
            country: res.location.country,
            postcode: res.location.postcode,
          })
        );
        setData(locations);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [url]);

  return data;
};
export default useFetch;
