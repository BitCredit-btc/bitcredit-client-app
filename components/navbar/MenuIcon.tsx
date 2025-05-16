const MenuIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      width={42}
      height={42}
      viewBox="0 0 44 44"
      className="md:hidden block hover:cursor-pointer"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M2 0.5H42C42.8284 0.5 43.5 1.17157 43.5 2V42C43.5 42.8284 42.8284 43.5 42 43.5H2C1.17157 43.5 0.5 42.8284 0.5 42V2C0.5 1.17157 1.17157 0.5 2 0.5Z"
        stroke="#73848C"
      />
      <line x1={11} y1={18} x2={33} y2={18} stroke="#F6F8F8" />
      <line x1={11} y1={26} x2={33} y2={26} stroke="#F6F8F8" />
    </svg>
  );
};


export default MenuIcon;
