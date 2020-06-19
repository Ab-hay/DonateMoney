import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import flyMoney from '../images/flyMoney.gif'


const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const gridcss ={
  color: "#000000",
}
const axis ={
  color: "#000000",
  fontWeight: "250"
}

export default class Chart extends PureComponent {
  handleImagePos = (e: any) =>{
    return(<image href={flyMoney} x={e.cx -20} y={e.cy -15} height="60px" width="60px"/>)
  }
  render() {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        className="card grad chart-div"
        margin ={ { top: 25, left: 5, right: 35, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" style= {gridcss}/>
        <XAxis dataKey="name" stroke="#000000" domain={['auto', 'auto']}/>
        <YAxis stroke="#000000" domain={['auto', 'auto']} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#000000" activeDot={(e) => this.handleImagePos(e)}></Line>
        
      </LineChart>
    );
  }
}

