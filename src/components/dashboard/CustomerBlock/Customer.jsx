import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { CustomerWrap } from "./Customer.styles";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";

const data = [
  {
    name: "A",
    last_month: 400,
    this_month: 240,
  },
  {
    name: "B",
    last_month: 300,
    this_month: 139,
  },
  {
    name: "C",
    last_month: 400,
    this_month: 180,
  },
  {
    name: "D",
    last_month: 278,
    this_month: 190,
    amt: 2000,
  },
  {
    name: "E",
    last_month: 189,
    this_month: 480,
  },
  {
    name: "F",
    last_month: 239,
    this_month: 380,
  },
  {
    name: "G",
    last_month: 349,
    this_month: 430,
  },
];

const formatLegendValue = (value, name) => {
  const initialVal = 0;
  const totalVal = data.reduce((accumulator, currentValue) => {
    if (Object.keys(currentValue).includes(name.dataKey)) {
      return accumulator + currentValue[name.dataKey];
    }
  }, initialVal);
  return (
    <span className="custom-legend-item-text-group">
      <span className="custom-legend-item-text">{value.replace("_", " ")}</span>
      <span className="custom-legend-item-text">${totalVal}</span>
    </span>
  );
};

const Customer = () => {
  return (
    <CustomerWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Customer Satisfaction</h3>
        </BlockTitle>
      </div>
      <BlockContentWrap className="area-chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095FF" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#0095FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#07E098" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#07E098" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="last_month"
              stroke="#0095FF"
              fillOpacity={1}
              fill="url(#colorUv)"
              strokeWidth={2}
              dot={{
                stroke: "#0095FF",
                fill: "#0095FF",
              }}
            />
            <Legend formatter={formatLegendValue} />
            <Area
              type="monotone"
              dataKey="this_month"
              stroke="#07E098"
              fillOpacity={1}
              fill="url(#colorPv)"
              strokeWidth={2}
              dot={{
                stroke: "#07E098",
                fill: "#07E098",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </BlockContentWrap>
    </CustomerWrap>
  );
};

export default Customer;
