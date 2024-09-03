import { FC } from "react";

const Button: FC = (): JSX.Element => {
  return (
    <>
      <div>
        <button className="text-white bg-lime-300 px-[45px] py-[15px] rounded-full">
          Отправить
        </button>
      </div>
    </>
  );
};

export default Button;
