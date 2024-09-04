import { FC } from "react";
import { useAppSelector } from "../../../hooks";

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
        <button
          onClick={handleClick}
          className="text-white bg-lime-300 px-[45px] py-[15px] rounded-full"
        >
          Отправить
        </button>
      </div>
    </>
  );
};

export default Button;
