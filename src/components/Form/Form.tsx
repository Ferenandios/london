import { FC } from "react";
import Title from "./Title/Title";
import Inputs from "./Inputs/Inputs";

const Form: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <Title />
      <Inputs />
    </div>
  );
};

export default Form;
