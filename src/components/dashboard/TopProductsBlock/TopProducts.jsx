import { BlockTitle } from "../../../styles/global/default";
import { TopProductsWrap } from "./TopProducts.styles";

const data = [
  {
    id: 1,
    name: "Home Decor Range",
    popularityPercent: 70,
    salesPercent: 45,
  },
  {
    id: 2,
    name: "Disney Princess Pink Bag 18'",
    popularityPercent: 60,
    salesPercent: 29,
  },
  {
    id: 3,
    name: "Bathroom Essentials",
    popularityPercent: 50,
    salesPercent: 18,
  },
  {
    id: 4,
    name: "Apple Smartwatches",
    popularityPercent: 30,
    salesPercent: 25,
  },
];

const TopProducts = () => {
  return (
    <TopProductsWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Top Products</h3>
        </BlockTitle>
      </div>
      <div className="tbl-products">
        <table>
          <thead>
            <tr>
              <th># </th>
              <th>Name </th>
              <th>Popularity </th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((progressItem, index) => {
              return (
                <tr key={progressItem.id}>
                  <td>{index + 1}</td>
                  <td>{progressItem.name}</td>
                  <td>
                    <div className="tbl-progress-bar">
                      <div
                        className="bar-fill"
                        style={{
                          width: `${progressItem.popularityPercent}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                  <td>
                    <div className="tbl-badge">
                      {progressItem.salesPercent}%
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TopProductsWrap>
  );
};

export default TopProducts;
