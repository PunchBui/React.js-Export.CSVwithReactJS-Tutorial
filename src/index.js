import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CSVLink } from "react-csv";
import "./styles.css";

const App = () => {
  const refs = useRef(null);
  let [dataSort, setDataSort] = useState([]);
  const headers = [
    { label: "วัน/เดือน/ปี", key: "date" },
    { label: "รายการ", key: "lists" },
    { label: "ลูกค้า", key: "customer" },
    { label: "weight 48", key: "weight48" },
    { label: "weight 15", key: "weight15" },
    { label: "weight 13", key: "weight13" },
    { label: "weight 11", key: "weight11" },
    { label: "weight 7", key: "weight7" },
    { label: "weight 4", key: "weight4" },
    { label: "ยอดเงิน", key: "costs" },
    { label: "พนักงาน(ผู้ส่ง)", key: "deliver" }
  ];
  const objectData = [
    {
      date: "10/12/52",
      lists: "Water tank",
      customer: "banjoe",
      weight48: "PTT:1",
      weight11: "WG:2",
      cost: "24,000",
      deliver: "benchapon"
    },
    {
      date: "10/12/52",
      lists: "Water tank",
      customer: "banjoe",
      weight48: "PTT:1",
      weight11: "WG:2",
      cost: "24,000",
      deliver: "punch"
    },
    {
      date: "10/12/52",
      lists: "Water tank",
      customer: "banjoe",
      weight48: "PTT:1",
      weight11: "WG:2",
      cost: "24,000",
      deliver: "benchapon"
    }
  ];
  const createObjectData = () => {
    let dataSort = [];
    objectData.map(items => {
      const date = items.date;
      const lists = items.lists;
      const customer = items.customer;
      const weight48 = items.weight48 || "-";
      const weight15 = items.weight15 || "-";
      const weight13 = items.weight13 || "-";
      const weight11 = items.weight11 || "-";
      const weight7 = items.weight7 || "-";
      const weight4 = items.weight4 || "-";
      const costs = items.costs || "-";
      const deliver = items.deliver || "-";
      const itemsToAdd = {
        date: date,
        lists: lists,
        customer: customer,
        weight48: weight48,
        weight15: weight15,
        weight13: weight13,
        weight11: weight11,
        weight7: weight7,
        weight4: weight4,
        costs: costs,
        deliver: deliver
      };
      dataSort.push(itemsToAdd);
      //console.log(JSON.stringify(dataSort));
    });
    //refs.current.link.click();
    setDataSort(dataSort);
    //return dataSort;
  };
  //dataSort = createObjectData();
  console.log("test", JSON.stringify(dataSort));
  return (
    <div className="App">
      <button
        onClick={() => {
          createObjectData();
        }}
      >
        Download
      </button>
      {JSON.stringify(dataSort)}
      <CSVLink
        id="Report"
        headers={headers}
        ref={refs}
        data={dataSort}
        filename={"Report.csv"}
      >
        asd
      </CSVLink>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
