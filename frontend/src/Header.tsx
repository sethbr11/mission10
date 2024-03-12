import { CSSProperties } from 'react';
import logo from './BLE-logo.png';

function Header(props: any) {
  const bg = {
    backgroundColor: '#02002a',
  };

  const alignLeft: CSSProperties = {
    textAlign: 'left',
  };

  return (
    <header className="row navbar navbar-dark" style={bg}>
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle" style={alignLeft}>
        <h1 className="text-white">{props.title}</h1>
        <p className="text-white">{props.description}</p>
      </div>
    </header>
  );
}

export default Header;
