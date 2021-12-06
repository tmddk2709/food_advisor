import React from 'react';
import { Space, Spin } from 'antd';

const style = {
  padding: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const Loader = () => (
  <div style={style}>
    <Spin size="large"/>
  </div>
);

export default Loader;