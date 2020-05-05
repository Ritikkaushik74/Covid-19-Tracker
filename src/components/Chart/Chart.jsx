import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data, country }) => {
  const [fetchedCountry, setfetchedCountry] = useState('Global');

  const countries = () => {
    setfetchedCountry(country);

  };

  useEffect(() => {
    if (country !== '') {
      countries();
      console.log('if');
    
    }else if (country===''){
      setfetchedCountry('Global');
      console.log('else');
    }
  },[country]);

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recoverd", "Deaths"],
        datasets: [
          {
            label: `${fetchedCountry}`,
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      option={{
        legend: { display: false },
        title: { display: true, text: `Current state in${country}` },
      }}
    />
  ) : null;

  return <div className={styles.container}> {barChart}</div>;
};

export default Chart;
