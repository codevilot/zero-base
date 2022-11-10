import { render, screen } from "@testing-library/react";
import { BinaryCalculator } from "./BinaryCalculator";

describe("BinaryCalculator 컴포넌트", () => {
  test("numberOfButtons 속성(prop)의 갯수 만큼 ToggleButton 컴포넌트가 렌더링 됩니다.", () => {
    let expected = 7;
    render(<BinaryCalculator numberOfButtons={expected} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(expected);
  });
});
