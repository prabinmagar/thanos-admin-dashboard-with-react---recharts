import { SalesMapWrap } from "./SalesMap.styles";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoJson from "../../../data/world-50m.v1.json";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { SALES_MAP_DATA } from "../../../data/mockData";

// REFERENCE LINK FOR WORLD50M JSON USAGE: https://gist.github.com/abrahamdu/50147e692857054c2bf88c443946e8a5

// Mapping of color names to their respective hex codes
const COLOR_MAP = {
  red: "#ef4444",
  violet: "#a700ff",
  dodgerBlue: "#0095ff",
  emerald: "#00e096",
  yellow: "#ffcf00",
};

const getFillColor = (fillCode) => COLOR_MAP[fillCode] || "#ececec";

const findByCountryId = (countryId) => {
  const matchedCountry = SALES_MAP_DATA.find(
    (country) => country.countryId === countryId
  );
  return matchedCountry ? getFillColor(matchedCountry.fillColor) : "#ececec";
};

const SalesMap = () => {
  return (
    <SalesMapWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Sales Mapping by Country</h3>
        </BlockTitle>
      </div>
      <BlockContentWrap className="map-chart">
        <ComposableMap
          // projection="geoMercator"
          projection="geoNaturalEarth1"
          projectionConfig={{
            // Set center coordinates (longitude, latitude) and scale (zoom level)
            rotate: [0, 0, 0],
            scale: 200, // Adjust the scale to control the zoom level (higher value = more zoomed-in)
            // center: [0, 20], // Adjust to focus on a specific region
          }}
        >
          <Geographies geography={geoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                // excluding Antarctica
                if (geo.code !== "010") {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={findByCountryId(geo.id)}
                      // stroke="#D6D6DA"
                    />
                  );
                }
              })
            }
          </Geographies>
        </ComposableMap>
      </BlockContentWrap>
    </SalesMapWrap>
  );
};

export default SalesMap;
