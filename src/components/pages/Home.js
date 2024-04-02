import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS , CategoryScale,
 LinearScale, PointElement, LineElement , Title , Tooltip, Legend} from 'chart.js'
import { Prices } from './Prices'
import './Home.css'


ChartJS.register(
    CategoryScale,
 LinearScale, PointElement, LineElement 
 , Title , Tooltip, Legend
)

export function Home() {

    const [data, setData] = useState();

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        setData(response.data.data.reverse());
        console.log(data);
      };
      fetchData();
    }, []);

  const [chartData, setChartData]= useState(null)

  const options = {
    scales: {
        x: {
            title: {
                display: true,
                text: 'Year',
                font:{
                    size: 14,
                    weight:'bold',
                    color:'black'
                }
            }
        },
        y: {
            title: {
                display: true,
                text: 'Population',
                font:{
                    size: 14,
                    weight:'bold',
                    color:'black'
                }
            }
        },
        
        responsive: true, 
        maintainAspectRatio: false,
        height: 400,
        width: 800
    }
    ,
    plugins: {
        legend: {
          display: true,
          position: 'top', 
          labels: {
            color: 'black',
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        }
      }
};


  useEffect(() => {
    if (data) {
        setChartData({
            labels: data.map((dat) => dat.Year),
            datasets: [{
                label: 'Population',
                data: data.map((dat) => dat.Population),
                borderColor: 'black'
            }]
        });
    }
}, [data]);

  return (
    <div className='every'>
    <div className='back'>
    <p className='front'>POPULATION DATA</p>
    </div>
    <div className='chart'>
        {chartData && <Line options={options} data={chartData} />}   
    </div>
    <Prices/>
    </div>
  )
}

