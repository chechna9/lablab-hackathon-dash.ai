interface NavLiProps {
  children: string;
}
const NavLi = (props: NavLiProps) => {
  return (
    <li className="hover:font-semibold cursor-pointer transition-all">
      {props.children}
    </li>
  );
};

export default NavLi;
