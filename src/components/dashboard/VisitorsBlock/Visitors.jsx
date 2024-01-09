import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Dot,
} from "recharts";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import PropTypes from "prop-types";
import { VisitorsBlockWrap } from "./Visitors.styles";

const data = [
  { month: "Jan", new_customer: 50, loyal_customer: 70, unique_customer: 120 },
  {
    month: "Feb",
    new_customer: 140,
    loyal_customer: 130,
    unique_customer: 140,
  },
  {
    month: "Mar",
    new_customer: 160,
    loyal_customer: 160,
    unique_customer: 140,
  },
  {
    month: "Apr",
    new_customer: 180,
    loyal_customer: 200,
    unique_customer: 210,
  },
  {
    month: "May",
    new_customer: 190,
    loyal_customer: 280,
    unique_customer: 220,
  },
  {
    month: "Jun",
    new_customer: 200,
    loyal_customer: 330,
    unique_customer: 230,
  },
  {
    month: "Jul",
    new_customer: 310,
    loyal_customer: 320,
    unique_customer: 240,
  },
  {
    month: "Aug",
    new_customer: 300,
    loyal_customer: 310,
    unique_customer: 230,
  },
  {
    month: "Sept",
    new_customer: 180,
    loyal_customer: 330,
    unique_customer: 160,
  },
  {
    month: "Oct",
    new_customer: 160,
    loyal_customer: 180,
    unique_customer: 170,
  },
  {
    month: "Nov",
    new_customer: 140,
    loyal_customer: 220,
    unique_customer: 150,
  },
  { month: "Dec", new_customer: 120, loyal_customer: 70, unique_customer: 130 },
];

const formatLegendValue = (value) => {
  return value.replace("_", " ");
};

const formatTooltipValue = (value, name) => {
  return `${value.replace("_", " ")}: ${name}`;
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
        <li></li>
      </ul>
    </div>
  );
};

CustomTooltipContent.propTypes = {
  payload: PropTypes.any,
};

const VisitorsBlock = () => {
  return (
    <VisitorsBlockWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Visitor Insights</h3>
        </BlockTitle>
      </div>
      <BlockContentWrap className="line-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#f8f8f9"
              horizontal={true}
              vertical={false}
              strokeDasharray="3 0"
            />
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              padding={{ left: 20 }}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 20}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7B91B0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />
            <YAxis
              tickSize={0}
              axisLine={false}
              ticks={[100, 200, 300, 400]}
              tick={{
                fill: "#7B91B0",
                fontSize: 14,
              }}
            />
            <Tooltip content={<CustomTooltipContent />} />
            <Legend iconType="square" formatter={formatLegendValue} />
            <ReferenceLine
              isFront={true}
              x="May"
              stroke="#F64E60"
              strokeDasharray="3 3"
            >
              <Dot r={5} fill="#F64E60" />
            </ReferenceLine>
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="loyal_customer"
              stroke="#A700FF"
            />
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="new_customer"
              stroke="#F64E60"
            />
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="unique_customer"
              stroke="#3CD856"
            />
          </LineChart>
        </ResponsiveContainer>
      </BlockContentWrap>
    </VisitorsBlockWrap>
  );
};

export default VisitorsBlock;
