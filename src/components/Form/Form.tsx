import { FC } from "react";
import Title from "./Title/Title";
import Inputs from "./Inputs/Inputs";
import Button from "./Button/Button";
import styles from "./Form.module.css";

const Form: FC = (): JSX.Element => {
  return (
    <div className={styles.inner}>
      <Title />
      <Inputs />
      <Button />
    </div>
  );
};

export default Form;
