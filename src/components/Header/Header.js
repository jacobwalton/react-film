import "./header.css";

const Header = () => {
  return (
    <div>
      <header onClick={() => window.scroll(0, 0)} className="header">
        React Film 🎞
      </header>
    </div>
  );
};

export default Header;
