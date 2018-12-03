import React from 'react';
import "./header.css";

const Panel = (props) => {

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h2 className="panel-title text-center">{props.title}</h2>
      </div>
      <div className="panel-body">
        {props.children}
      </div>
    </div>

  );
};

export default Panel;