const Header = (props) => {
  return (
    <div>
      <h4 className="title">{props.title}</h4>
    </div>
  );
};

Header.defaultProps = {
  title: "",
};

export default Header;
