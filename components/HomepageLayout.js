import Menu from "./Menu";

const HomepageLayout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Menu />
      {children}
    </div>
  );
};
export default HomepageLayout;
