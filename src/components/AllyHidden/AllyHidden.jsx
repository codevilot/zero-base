import classNames from "classnames";
import styles from "./AllyHidden.css";

export function AllyHidden({ as: ComponentName, ...restProps }) {
  return (
    <ComponentName
      classNames={classNames(styles.srOnly, classNames)}
      {...restProps}
    />
  );
}

AllyHidden.defaultProps = {
  as: "span",
};
