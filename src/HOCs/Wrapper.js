import React from "react";
// import Footer from "../components/Footer";
import Header from "../components/Header";
import NavbarCategory from "../components/NavbarCategory";
const Wrapper = (Component) => {
  return (props) => {
    return (
      <div>
        <Header />
        <NavbarCategory />
        <Component {...props} />
        {/* <Footer /> */}
      </div>
    );
  };
};
export default Wrapper;
