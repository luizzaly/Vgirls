import React, { Component } from "react";
import { Link } from "react-router-dom";

const GynList = props => {
  console.log(props);
  return (
    <div>
      {props.gyns.map(gyn => {
        return (
          <div key={gyn._id}>
            <h3>{gyn.name}</h3>
            <h3>{gyn.address}</h3>
            <h3>{gyn.phoneNumber}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default GynList;
