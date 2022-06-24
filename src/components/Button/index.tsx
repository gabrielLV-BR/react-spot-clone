import style from "./style.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Button({children, ...props}: IButtonProps) {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
}