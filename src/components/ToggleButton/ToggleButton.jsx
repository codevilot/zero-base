import "./ToggleButton.css";
import classNames from "classnames";
export function ToggleButton({ onText, offText, on, onToggle }) {
  return (
    <button
      type="button"
      className={classnames("ToggleButton", { "ToggleButton--on": on })}
      onClick={toggle}
    >
      asdf
    </button>
  );
}
