import React from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";

const Wrapper = (Component) => {
  return (props) => {
    return (
      <div>
        {/* <Header /> */}
        <h1>Thể loại</h1>
        <Component {...props} />
        {/* <Footer /> */}
      </div>
    );
  };
};
export default Wrapper;
