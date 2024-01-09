import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { VolumeServiceWrap } from "./VolumeService.styles";
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "A",
    volume: 400,
    services: 240,
  },
  {
    name: "B",
    volume: 300,
    services: 139,
  },
  {
    name: "C",
    volume: 200,
    services: 980,
  },
  {
    name: "D",
    volume: 278,
    services: 390,
  },
  {
    name: "E",
    volume: 189,
    services: 480,
  },
  {
    name: "F",
    volume: 239,
    services: 380,
  },
  {
    name: "G",
    volume: 349,
    services: 430,
  },
];

const formatLegendValue = (name, legendObj) => {
  const initialVal = 0;
  const totalVal = data.reduce((accumulator, dataItem) => {
    if (Object.keys(dataItem).includes(legendObj.dataKey)) {
      return accumulator + dataItem[legendObj.dataKey];
    }
  }, initialVal);

  return (
    <span className="custom-legend-item-text-group">
      <span className="custom-legend-item-text">{name}</span>
      <span className="custom-legend-item-text">{totalVal}</span>
    </span>
  );
};

const VolumeService = () => {
  return (
    <VolumeServiceWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Volume vs Service Level</h3>
        </BlockTitle>
      </div>
      <BlockContentWrap className="stacked-bar-chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 5,
            }}
          >
            <Tooltip cursor={{ fill: "transparent" }} />
            <Legend
              iconType="circle"
              iconSize={10}
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#0095FF"
              radius={[0, 0, 4, 4]}
              barSize={16}
            />
            <Bar
              dataKey="services"
              stackId="a"
              fill="#00E096"
              radius={[4, 4, 0, 0]}
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </BlockContentWrap>
    </VolumeServiceWrap>
  );
};

export default VolumeService;
