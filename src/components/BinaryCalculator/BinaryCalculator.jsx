import Component from "react";
import styles from "./BinaryCalculator.css";
import { ToggleButton } from "./../ToggleButton/ToggleButton";

export class BinaryCalculator extends Component {
  state = {};
  render() {
    return (
      <div classname={styles.container}>
        {Array(this.props.numberOfButtons)
          .fill()
          .map((_, index) => (
            <ToggleButton key={index} />
          ))}
      </div>
    );
  }
}
