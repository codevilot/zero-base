import { render, screen } from "@testing-library/react";
import { AllyHidden } from "./AllyHidden";

describe("AllyHidden 컴포넌트", () => {
  test("AllyHidden 컴포넌트는 정상적으로 렌더링됩니다.", () => {
    render(<AllyHidden>테스트</AllyHidden>);
    const element = screen.getByText(/테스트/);
    expect(element).toBeInTheDocument();
  });
  test("span", () => {
    render(<AllyHidden data-testid="tester" />);
    const element = screen.getByTestId("tester");
    expect(element.localName).toBe("span");
    // expect(element.nodeName.toLowerCase()).toBe("span");
  });
  test("as속성", () => {
    render(<AllyHidden as="article" data-testid="tester" />);
    const element = screen.getByTestId("tester");
    expect(element.localName).toBe("article");
  });
  test("컴포넌트에 사용자가 추가한 className에 속성이 포함됩니다", () => {
    let defaultClassName = "srOnly";
    let expected = "my-class-name";
    render(<AllyHidden className={expected} data-testid="tester" />);
    const element = screen.getByTestId("tester");

    // expect(element).toHaveClass(defaultClassName, expected);
  });
  test("컴포넌트에 사용자가 추가한 style에 속성이 포함됩니다", () => {
    const expected = {
      width: "480px",
      height: "924px",
    };
    render(<AllyHidden style={expected}>접근성 감춤 요소</AllyHidden>);
    const element = screen.queryByText(/^접근성/);
    expect(element).toHaveStyle(expected);
  });
  test("컴포넌트의 콘텐츠에는 접근성 가춤 요건에 충족합니다", () => {

    })
 
    //   render(<AllyHidden>테스트</AllyHidden>);
  //   const element = screen.getByRole("/테스트/");
  //   expect(element).toBeInTheDocument();
  });
  // test("컴포넌트에 focusable 속성을 추가하면 시각적으로 화면에 표시됩니다", () => {
  //   render(<AllyHidden>테스트</AllyHidden>);
  //   const element = screen.getByRole("/테스트/");
  //   expect(element).toBeInTheDocument();
  // });
});
