type HeaderProps = {
  title: string;
};
const Header = ({ title }: HeaderProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = { title: "Task Tracker" };

export default Header;
