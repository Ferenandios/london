import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./Button.module.css";

const Button: FC = (): JSX.Element => {
  const { email, password } = useAppSelector((state) => state);
  const handleClick = () => {
    fetch("");
    alert(
      `Data sended succesfully! \n\nEmail: ${email}\nPassword: ${password}`
    );
  };
  return (
    <>
      <div>
        <button onClick={handleClick} className={styles.button}>
          Отправить
        </button>
      </div>
    </>
  );
};

export default Button;
