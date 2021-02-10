import React from 'react';
import "../components/assets/css/statistics.css";
import { Doughnut, Bar } from 'react-chartjs-2';

export default function Statistics() {
    let color =[
        '#73D490',
        '#91D0EF',
        '#F97275'
    ]
   
    let dataProvide =  {
        labels: [
            '30: Perfect',
            '20: Normal',
            '10: Bad'
        ],
        datasets: [{
        data: [30, 20, 10],
        backgroundColor:color,
        hoverBackgroundColor: color,
        }],
    };

    const dataBar = {
        labels: ['1', '2', '2', '4', '5', '6', '7','8','9','10'],
        datasets: [
          {
            label: 'Ratings',
            backgroundColor: '#63A4FF',
            borderColor: '#63A4FF',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(99, 164, 255,0.5)',
            hoverBorderColor: 'rgba(99, 164, 255,1)',
            data: [30, 1, 2, 2, 1, 2, 13,38,87,942]
          }
        ]
      };

      const option =  {
        scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            }   
        }]
    }
}


    const optionForDoughNut = {
            legend: {
               position: 'right'
            }
         
    }


    
    

    return (
        <div className="padding">
            <div className="chart">
                <Bar data={dataBar} options={option} />
            </div>
            <div className="chart">
                <Doughnut className="margin-top"  data = {dataProvide} options={optionForDoughNut} />
            </div>
        </div>
    )
}
