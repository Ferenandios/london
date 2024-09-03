import { ChangeEvent, FC } from "react";
import { setEmail, setPassword } from "../../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { IInput } from "../../../../types/types";

const Input: FC<{ input: IInput }> = ({ input }): JSX.Element => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state[input.type]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (input.type) {
      case "email":
        dispatch(setEmail(event.target.value));
        break;
      case "password":
        dispatch(setPassword(event.target.value));
        break;
      default:
        alert(52);
        break;
    }
  };
  return (
    <>
      <div className="flex">
        <h3>{input.title}</h3>
        <input
          onChange={(event) => handleChange(event)}
          value={value}
          placeholder={input.placeholder}
          type="text"
        />
      </div>
    </>
  );
};

export default Input;
