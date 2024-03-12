import logo from './BLE-logo.png';

const bg = {
  backgroundColor: '#02002a',
};

function Header(props: any) {
  return (
    <header className="row navbar navbar-dark" style={bg}>
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
      </div>
    </header>
  );
}

export default Header;
