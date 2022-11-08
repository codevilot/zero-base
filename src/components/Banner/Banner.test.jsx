import { render, screen } from "@testing-library/react";
import { Banner } from "./Banner";

describe("Banner 컴포넌트", () => {
  test("Banner 컴포넌트는 정상적으로 렌더링됩니다.", () => {
    render(<Banner>테스트</Banner>);
    expect(screen.getByText(/테스트/)).toBeInTheDocument();
  });
  test("as 속성이 div인 경우 div 요소로 렌더링 합니다.", () => {
    render(<Banner data-testid="tester" as="div" />);
    expect(screen.getByTestId("tester").localName).toBe("div");
  });
  test("class 네임에 추가된 경우 값을 추가합니다", () => {
    const expected = "add";
    render(<Banner data-testid="tester" className="add" />);
    expect(screen.getByTestId("tester")).toHaveClass(expected);
  });
  test("width와 height를 프로퍼티로 넣으면 맞게 반영된다", () => {
    const expected = {
      height: 300,
      width: 300,
    };

    render(
      <Banner
        width={expected.width}
        height={expected.height}
        data-testid="tester"
      />
    );
  });
  test("컴포넌트가 포함하는 자식 콘텐츠는 접근성 감충 요건 충족", () => {


    render(
      <Banner
        width={expected.width}
        height={expected.height}
        data-testid="tester"
      />
    );
  });
});
