import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Icons } from "../../assets/icons";

const AppBarLang = () => {
  const DEFAULT_COUNTRY = "United States";
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDroplistEnabled, setDroplistEnabled] = useState(false);
  const countryLangRef = useRef(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,languages"
        );
        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);

        const defaultCountry = sortedCountries.find(
          (country) => country?.name?.common === DEFAULT_COUNTRY
        );

        if (defaultCountry) {
          let langKey = Object.keys(defaultCountry.languages)[0];
          setSelectedCountry({
            country: defaultCountry.name.common,
            flag: defaultCountry.flags.png,
            language: langKey,
          });
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, []);

  const countrySelectHandler = (country, flag, language) => {
    setSelectedCountry({ country, flag, language });
    setDroplistEnabled(false);
  };

  const handleDroplistEnable = () => setDroplistEnabled(!isDroplistEnabled);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        countryLangRef.current &&
        !countryLangRef.current.contains(event.target)
      ) {
        setDroplistEnabled(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="appbar-dropdown lang-dropdown" ref={countryLangRef}>
      <div className="drop-selected" onClick={handleDroplistEnable}>
        <div className="drop-selected-img">
          <img src={selectedCountry?.flag} alt="" />
        </div>
        <div className="drop-selected-text">
          <span>{selectedCountry?.language}</span>
          <img src={Icons.ChevronDownDark} className="drop-icon" alt="" />
        </div>
      </div>
      <div className={`drop-list ${isDroplistEnabled ? "show" : ""}`}>
        {loading ? (
          <div>Data loading ...</div>
        ) : (
          <div className="drop-list-wrapper scrollbar">
            {countries?.map((country) => {
              if (Object.keys(country.languages)) {
                const langKey = Object.keys(country.languages)[0];
                return (
                  <div
                    className="drop-item"
                    key={country.name.common}
                    onClick={() =>
                      countrySelectHandler(
                        country?.name?.common,
                        country?.flags?.png,
                        langKey
                      )
                    }
                  >
                    <span className="drop-item-img">
                      <img src={country.flags.png} alt="" />
                    </span>
                    <span className="drop-item-text">{langKey}</span>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppBarLang;
