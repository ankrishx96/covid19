import { Card } from "./Components/Card";
import covid from "./Images/covid.png";

export const CovidSummary = (props) => {
  const { country, totalConfirmed, totalRecovered, totalDeaths } = props;




  return (
    <div className="text-center">
      <img
        src={covid}
        className="p-2"
        style={{ maxWidth: "25%" }}
        alt=""
      />
      <h1 className="p-2">{country === ''? 'World Wide':country} Corona Report</h1>

      {/* Cards Start */}
      <div className="row d-flex justify-content-center">
        <div className="col-sm-4">
          <Card cardName="Total Confirmed" totalData={totalConfirmed} color="4px solid green"></Card>
        </div>

        <div className="col-sm-4">
          <Card cardName="Total Recovered" totalData={totalRecovered} color="4px solid orange"></Card>
        </div>

        <div className="col-sm-4">
          <Card cardName="Total Deaths" totalData={totalDeaths} color="4px solid red"></Card>
        </div>
      </div>
      {/* Cards End */}
    </div>
  );
};
