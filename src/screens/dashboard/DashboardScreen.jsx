import { Customer, Revenue, Sales, TargetReality, Visitors, TopProducts, SalesMap, VolumeService } from "../../components";
import { DashboardScreenWrap } from "./DashboardScreen.styles";

const DashboardScreen = () => {
  return (
    <DashboardScreenWrap className="content-area">
      <div className="area-row ar-one">
        <Sales />
        <Visitors />
      </div>
      <div className="area-row ar-two">
        <Revenue />
        <Customer />
        <TargetReality />
        <TopProducts />
        <SalesMap />
        <VolumeService />
      </div>
    </DashboardScreenWrap>
  );
};

export default DashboardScreen;
