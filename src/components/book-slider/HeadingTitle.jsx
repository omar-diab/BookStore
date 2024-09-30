const divStyle = {
  padding: "30px",
  backgroundColor: "#fff",
};

const h2Styles = {
  color: "#1926d2",
  fontSize: "40px",
  fontWeight: "bold",
  borderBottom: "1px solid #1926d2",
  width: "max-content",
  paddingBottom: "5px",
};

const HeadingTitle = ({ title }) => {
  return (
    <div style={divStyle}>
      <h2 style={h2Styles}>{title}</h2>
    </div>
  );
};

export default HeadingTitle;
