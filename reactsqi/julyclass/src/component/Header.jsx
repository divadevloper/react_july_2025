import style from "./Header.module.css";

const Header = () => {
  const mystyle = {
    header: {
      backgroundColor: "brown",
      fontFamily: "sans-serif",
    },

    footer: { width: "300px", height: "300px", backgroundColor: "palegreen" },
  };

  return (
    <>
      <div> This is Header Component</div>
      <div>
        {" "}
        <h1
          style={{
            backgroundColor: "blue",
            fontFamily: "sans-serif",
            fontSize: "30px",
          }}
        >
          hi in Header component
        </h1>
        <h1 style={mystyle.header}> hi with internal styling</h1>
        <div style={mystyle.footer}></div>
        <div className={style.container}></div>
      </div>
    </>
  );
};
export default Header;
