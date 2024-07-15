import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header>Header</Header>
      <main className={classes.content}>{children}</main>
      <Footer>Footer</Footer>
    </div>
  );
};

export default Layout;
