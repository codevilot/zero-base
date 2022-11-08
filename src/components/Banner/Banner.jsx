import "./Banner.css";

export function Banner({ as: ComponentName, width, height, ...restProps }) {
  return (
    <ComponentName
      className="Banner"
      {...restProps}
      style={{ height, width }}
    />
  );
}
Banner.defaultProps = {
  as: "span",
};
