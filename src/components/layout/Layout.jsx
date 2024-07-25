import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import classes from "./Layout.module.css";
import { ScrollProgressBar } from "../scrollProgressBar/ScrollProgressBar.jsx";

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <ScrollProgressBar />
      <Header>Header</Header>
      <main className={classes.content}>{children}</main>
      <Footer>Footer</Footer>
    </div>
  );
};

export default Layout;
