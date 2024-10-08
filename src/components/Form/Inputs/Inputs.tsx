import { FC } from "react";
import { IInput } from "../../../types/types";
import Input from "./Input/Input";

const Inputs: FC = (): JSX.Element => {
  const inputList: IInput[] = [
    { id: 0, type: "email", title: "Почта", placeholder: "Введите Вашу почту" },
    {
      id: 1,
      type: "password",
      title: "Пароль",
      placeholder: "Введите Ваш пароль",
    },
  ];
  return (
    <>
      <div>
        {inputList.map((input) => (
          <Input key={input.id} input={input} />
        ))}
      </div>
    </>
  );
};

export default Inputs;
