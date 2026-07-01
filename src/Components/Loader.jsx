import logo from "../assets/images/favicon.png";

function Loader() {
  return (
    <div className="loader-wrapper">

      <div className="loader-content">

        <img
          src={logo}
          alt="Logo"
          className="loader-logo"
        />

        <h2>Vishwakarma Body Builders</h2>

        <div className="loader-spinner"></div>

      </div>

    </div>
  );
}

export default Loader;