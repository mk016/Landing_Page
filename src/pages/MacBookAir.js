import "./MacBookAir.css";

const MacBookAir = () => {
  return (
    <div className="macbook-air-11">
      <div className="logo-group">
        <b className="logo1">PAGE</b>
        <div className="home-group">
          <b className="home1">Home</b>
          <div className="illustrations1">Illustrations</div>
          <div className="contact1">Contact</div>
        </div>
        <div className="sign-up-frame">
          <b className="sign-up2">Sign up</b>
        </div>
        <div className="sign-in-container">
          <b className="sign-up2">Sign in</b>
        </div>
      </div>
      <img className="saly-1-icon1" alt="" src="/saly1@2x.png" />
      <b className="make-your-business-container1">
        <p className="make-your-business1">
          <span className="make-your1">Make Your </span>
          <span className="business1">Business</span>
          <span> </span>
        </p>
        <p className="make-your-business1">Stand out!</p>
      </b>
      <input className="email-container" type="text" placeholder="Email address" />
      <div className="frame-div">
        <b className="sign-up2">Sign up</b>
      </div>
      <div className="we-provide-the1">
        This is My First React landing Page , developed by {"@mk016"}
      </div>
      <div className="mk0161">
        
        <a href="https://github.com/mk016" target="_blank">
          @mk016
        </a>
      </div>
    </div>
  );
};

export default MacBookAir;
