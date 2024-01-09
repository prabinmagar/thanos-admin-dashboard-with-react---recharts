import { useEffect, useRef, useState } from "react";
import { Icons } from "../../assets/icons";
import { AppBarWrap } from "./AppBar.styles";
import AppBarLang from "./AppBarLang";
import AppBarProfile from "./AppBarProfile";
import { MdOutlineMenu } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../../redux/slices/sidebarSlice";

const AppBar = () => {
  const [showInputControl, setShowInputControl] = useState(false);
  const inputControlRef = useRef(null);

  const handleInputControlVisibility = () =>
    setShowInputControl(!showInputControl);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputControlRef.current &&
        !inputControlRef.current.contains(event.target) &&
        event.target.className !== "input-icon" &&
        event.target.className !== "input-icon-img"
      ) {
        setShowInputControl(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const dispatch = useDispatch();

  return (
    <AppBarWrap>
      <div className="appbar-content">
        <div className="appbar-left">
          <button
            type="button"
            className="sidebar-open-btn"
            onClick={() => dispatch(setSidebarOpen())}
          >
            <MdOutlineMenu size={24} />
          </button>
          <h3 className="appbar-title">Dashboard</h3>
        </div>
        <div className="appbar-right">
          <div className="appbar-search">
            <form action="">
              <div className="input-group">
                <span
                  className="input-icon"
                  onClick={handleInputControlVisibility}
                >
                  <img
                    src={Icons.SearchBlue}
                    className="input-icon-img"
                    alt=""
                  />
                </span>
                <input
                  ref={inputControlRef}
                  type="text"
                  placeholder="Search here ..."
                  className={`input-control ${
                    showInputControl ? "show-input-control" : ""
                  }`}
                />
              </div>
            </form>
          </div>
          <AppBarLang />
          <button type="button" className="appbar-icon-btn">
            <img src={Icons.NotificationOrange} alt="" />
            <span className="icon-btn-dot"></span>
          </button>
          <AppBarProfile />
        </div>
      </div>
    </AppBarWrap>
  );
};

export default AppBar;
