interface NavLiProps {
  children: string;
  isActive: boolean;
  onClick: () => void;
}
const NavLi = (props: NavLiProps) => {
  return (
    <li
      className={`hover:font-semibold cursor-pointer transition-all ${
        props.isActive ? "font-semibold" : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </li>
  );
};

export default NavLi;
