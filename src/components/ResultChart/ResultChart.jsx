import { AreaChart } from 'lucide-react';
import React from 'react';
import { Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Rahim",
    "physics": 78,
    "chemistry": 82,
    "math": 85
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 88,
    "chemistry": 76,
    "math": 90
  },
  {
    "id": 3,
    "name": "Ayesha",
    "physics": 67,
    "chemistry": 70,
    "math": 72
  },
  {
    "id": 4,
    "name": "Sadia",
    "physics": 92,
    "chemistry": 89,
    "math": 95
  },
  {
    "id": 5,
    "name": "Hasan",
    "physics": 74,
    "chemistry": 68,
    "math": 80
  },
  {
    "id": 6,
    "name": "Nusrat",
    "physics": 81,
    "chemistry": 85,
    "math": 88
  },
  {
    "id": 7,
    "name": "Tanvir",
    "physics": 69,
    "chemistry": 73,
    "math": 75
  },
  {
    "id": 8,
    "name": "Farhan",
    "physics": 95,
    "chemistry": 91,
    "math": 94
  },
  {
    "id": 9,
    "name": "Mehedi",
    "physics": 83,
    "chemistry": 79,
    "math": 84
  },
  {
    "id": 10,
    "name": "Jannat",
    "physics": 77,
    "chemistry": 81,
    "math": 79
  }
]


const ResultChart = () => {
    return (
        <div>
            {/* <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart> */}

            <AreaChart width={800} height={400} data={resultData}>
            <CartesianGrid strokeDasharray='3 3'>
              
              <XAxis dataKey='name'></XAxis>
              <YAxis></YAxis>

              <Tooltip></Tooltip>
              <Legend></Legend>

              <Area type='monotone' dataKey='name' stackId="1" stroke="#8884d8" fill="#8884d8"></Area>
              <Area type='monotone' dataKey='physics' stackId="1" stroke="#8884d8" fill="#8884d8"></Area>
              <Area type='monotone' dataKey='name' stackId="1" stroke="#8884d8" fill="#8884d8"></Area>

            </CartesianGrid>
            </AreaChart>
        </div>
    );
};

export default ResultChart;