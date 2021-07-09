import { ReactElement } from "react";
import styles from "./styles.module.css";

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props): ReactElement => {
  return <div className={styles.test}>Example Component: {text}</div>;
};
