import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { TargetRealityWrap } from "./TargetReality.styles";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { Icons } from "../../../assets/icons";
import { TARGET_REALITY_DATA } from "../../../data/mockData";

const formatTooltipValue = (value) => {
  return `${value} sales`;
};

const TargetReality = () => {
  return (
    <TargetRealityWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Target vs. Reality</h3>
        </BlockTitle>
      </div>
      <BlockContentWrap className="bar-chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={TARGET_REALITY_DATA}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <Bar
              dataKey="reality"
              fill="#4ab58e"
              radius={[4, 4, 4, 4]}
              barSize={16}
            />
            <Bar
              dataKey="target"
              fill="#ffcf00"
              radius={[4, 4, 4, 4]}
              barSize={16}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              formatter={formatTooltipValue}
            />
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 25}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7B91B0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </BlockContentWrap>
      <div className="block-foot">
        <div className="legend-info">
          <div className="legend-info-item">
            <div className="info-item-l">
              <div className="info-item-icon">
                <img src={Icons.BagGreen} alt="" />
              </div>
              <div className="info-item-text">
                <h4 className="info-item-title">Reality Sales</h4>
                <p className="info-item-subtitle">Global</p>
              </div>
            </div>
            <div className="info-item-r">
              <p className="info-item-val">8.823</p>
            </div>
          </div>
          <div className="legend-info-item">
            <div className="info-item-l">
              <div className="info-item-icon">
                <img src={Icons.TicketYellow} alt="" />
              </div>
              <div className="info-item-text">
                <h4 className="info-item-title">Target Sales</h4>
                <p className="info-item-subtitle">Commercial</p>
              </div>
            </div>
            <div className="info-item-r">
              <p className="info-item-val">12.122</p>
            </div>
          </div>
        </div>
      </div>
    </TargetRealityWrap>
  );
};

export default TargetReality;
