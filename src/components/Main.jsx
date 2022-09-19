import React from "react";
import { useState } from "react";
import Data from "../data.json";
import ReactCountryFlag from "react-country-flag";
import { BiX } from "react-icons/bi";

function Main() {
  const [widgetMinimize, setWidgetMinimize] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // uncheck all the checkboxes
  const deselect = () => {
    let cross = document.getElementsByName("cross");
    let len = cross.length;
    for (let x = 0; x < len; x++) {
      cross[x].checked = false;
    }
  };

  const alphabets = [];
  for(let x = 65; x < 91; x++){
    alphabets[x] = String.fromCharCode(x);
  }

  const [tempAlphabetSet, setTempAlphabetSet] = useState(alphabets);
  const refs = Data.reduce((acc, value) => {
    acc[value.City[0]] = React.createRef();
    return acc;
  }, {});

  // lists the cities beginning with the alphabet you clicked
  const onAlphabetSelect = (al) => {
    const el = document.getElementById(al);
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
  };

  const filterAlphabetSet = (al) => {
    let newAlphabetSet = [];
    if (al) {
      Data.forEach((val) => {
        if (val.City.toLowerCase().includes(al)) {
          if (!newAlphabetSet.includes(val.City.charAt(0))) {
            newAlphabetSet.push(val.City.charAt(0));
          }
        }
      });
    } else newAlphabetSet = alphabets;
    setTempAlphabetSet(newAlphabetSet.sort());
  };
  return (
    <div className="main">
      <div className={`box ${widgetMinimize ? "box-active" : ""}`}>
        <div
          className={`content ${widgetMinimize ? "content-active" : ""}`}
        ></div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Filter Locations"
          onChange={(event) => {
            filterAlphabetSet(event.target.value);
            setSearchTerm(event.target.value);
          }}
        />
        <div className="check">
          <BiX size={20} className="cross" onClick={deselect} />
          Clear All
        </div>
      </div>
      <div className="list">
        <div className="cityNames">
          {/* sorts and filters the list */}
          {Data.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.City.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
            .sort((a, b) => (a.City > b.City ? 1 : -1))
            .map((item, key) => {
              return (
                <div className="data" id={item.City.charAt(0)} key={key}>
                  <h5>
                    <input type="checkbox" name="cross" className="checked" />
                    <ReactCountryFlag
                      className="flags"
                      countryCode={item.code}
                      svg
                    />
                    {item.City}-{item.Country}
                  </h5>
                </div>
              );
            })}
        </div>
        <div className="alphabetList">
          {tempAlphabetSet.map((item, key) => (
            <div key={key}>
              <button className = 'btn' type="button" onClick={() => onAlphabetSelect(item)}>
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
