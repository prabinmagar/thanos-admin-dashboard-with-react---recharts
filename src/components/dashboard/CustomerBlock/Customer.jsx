import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { CustomerWrap } from "./Customer.styles";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { CUSTOMER_DATA } from "../../../data/mockData";
import PropTypes from "prop-types";

const formatLegendValue = (value, name) => {
  const initialVal = 0;
  const totalVal = CUSTOMER_DATA.reduce((accumulator, currentValue) => {
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

const CustomTooltipContent = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="custom-recharts-tooltip">
      <p className="recharts-tooltip-label">{payload[0].payload?.month}</p>
      <ul className="recharts-tooltip-item-list">
        {payload?.map((payloadItem, index) => {
          return (
            <li key={index}>
              {formatTooltipValue(payloadItem.name, payloadItem.value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CustomTooltipContent.propTypes = {
  payload: PropTypes.any,
};

const formatTooltipValue = (value, name) => {
  return `${value.replace("_", " ")}: ${name}`;
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
            data={CUSTOMER_DATA}
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
            <Tooltip content={<CustomTooltipContent />} />
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
