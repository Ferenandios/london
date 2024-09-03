import React, { FC } from "react";
import { IInput } from "../../../../types/types";

const Input: FC<{ input: IInput }> = ({ input }): JSX.Element => {
  return (
    <>
      <div>
        <h3>{input.title}</h3>
        <input placeholder={input.placeholder} type="text" />
      </div>
    </>
  );
};

export default Input;
