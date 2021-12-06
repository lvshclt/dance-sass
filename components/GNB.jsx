import { Link } from 'react-router-dom';

export default function GNB() {
  return (
    <div className="gnb col-lg-12">
      <div className="left col-lg-1">
        <Link to="/">
          <h3 className="home">HOME</h3>
        </Link>
      </div>
      <div className="right col-lg-3">
        <Link to="/">
          <h3 className="works">WORK</h3>
        </Link>
        <Link to="/">
          <h3 className="about">ABOUT</h3>
        </Link>
        <Link to="/">
          <h3 className="contact">CONTACT</h3>
        </Link>
      </div>
    </div>
  );
}
