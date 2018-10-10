import React from 'react';
import {
  BarChart,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
  Legend,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Graphs extends React.Component {
  render() {
    const bar_data = [
      {
        name: '8am',
        Turns: 1600,
        People: 2400,
        htr: 2400
      }, {
        name: '10am',
        Turns: 300,
        People: 1398,
        htr: 2210
      }, {
        name: 'Noon',
        Turns: 4000,
        People: 9800,
        htr: 2290
      }, {
        name: '2pm',
        Turns: 1800,
        People: 3908,
        htr: 2000
      }, {
        name: '4pm',
        Turns: 1890,
        People: 4800,
        htr: 2181
      }, {
        name: '6pm',
        Turns: 2000,
        People: 3800,
        htr: 2500
      }, {
        name: '8pm',
        Turns: 4000,
        People: 4300,
        htr: 2100
      }
    ];
    const data = [
      {
        name: 'Group A',
        value: 400
      }, {
        name: 'Group B',
        value: 300
      }, {
        name: 'Group C',
        value: 300
      }, {
        name: 'Group D',
        value: 200
      }
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    return (
    <div>
      <div>
        pie chart
      </div>
      <div>
        percentage Bar Graphs
      </div>
      <div>
        percentage Bar Graphs
      </div>
      <div>
        percentage Bar Graphs
      </div>
      <div>
        <BarChart width={400} height={300} data={bar_data}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="Turns" fill="#8884d8"/>
          <Bar dataKey="People" fill="#82ca9d"/>
        </BarChart>
      </div>
    </div>)
  }
}

export default Graphs
