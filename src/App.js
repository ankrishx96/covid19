import "./App.css";
import { useEffect, useState } from "react";
// import { LineGraph } from "./Components/LineChart";
import { CovidSummary } from "./CovidSummary";
import { Axios } from "./Api/Axios";
import { Select } from "./Components/Select";

function App() {
  const [totalConfirmed, settotalConfirmed] = useState(0);
  const [totalRecovered, settotalRecovered] = useState(0);
  const [totalDeaths, settotalDeaths] = useState(0);
  const [country, setcountry] = useState("India");
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(`/summary`)
      .then((res) => {
        if (res.status === 200) {
          settotalConfirmed(res.data.Global.TotalConfirmed);
          settotalRecovered(res.data.Global.TotalRecovered);
          settotalDeaths(res.data.Global.TotalDeaths);
          setSummary(res.data);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <p>Data is loading please Wait...</p>;
  }

  return (
    <div className="container">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={country}
      />
      <br />
      <Select data={summary} />
    </div>
  );
}

export default App;
