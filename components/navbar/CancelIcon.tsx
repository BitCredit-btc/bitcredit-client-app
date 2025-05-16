const CancelIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      className="hover:cursor-pointer"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H42C42.8284 0.5 43.5 1.17157 43.5 2V42C43.5 42.8284 42.8284 43.5 42 43.5H2C1.17157 43.5 0.5 42.8284 0.5 42V2Z"
        stroke="#73848C"
      />
      <line x1="14.3536" y1="13.6464" x2="31.3241" y2="30.617" stroke="#F6F8F8" />
      <line x1="13.6464" y1="30.6464" x2="30.617" y2="13.6759" stroke="#F6F8F8" />
    </svg>
  );
};


export default CancelIcon;
