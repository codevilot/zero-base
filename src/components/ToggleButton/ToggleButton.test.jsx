import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

describe('ToggleButton 컴포넌트', () => {
  test('ToggleButton 컴포넌트는 정상적으로 렌더링됩니다.', () => {
render(<ToggleButton onText="1" offText="0" />)
const offElement = screen.getByText('0');
expect(offElement).toBeInTheDocument()
const onElement = screen.queryByText('1');
expect(onElement).not.toBeInTheDocument()
});
test('활성 상태 여부에 따라 활성 비활성이 표시됩니다.', () => {
  let onText = 'ON'
  let offText = 'Off'
  render(<ToggleButton onText={onText} offText={offText} />)
let elements=screen.queryAllByRole('button')
let firstElement = elements[0]
expect(firstElement).toHaveTextContent(offText)
screen.debug()
cleanup()
render(<ToggleButton onText={onText} offText={offText} on/>)
elements=screen.queryAllByRole('button')
firstElement = elements[0]
expect(firstElement).toHaveTextContent(onText)
screen.debug()
});


  test('ToggleButton 컴포넌트는 정상적으로 렌더링됩니다.', () => {
    let expected = 'triggering toggle event'
    render(<ToggleButton onToggle={()=> received=expected}/>)
    const element=screen.queryByRole('button')
    fireEvent.click(element); //click button element
    screen.debug()
    expect(received).toBe(expected)
});

// test(`클래스`, ()=>{
//   let expected = 'ToggleButton--on'
//   render(<ToggleButton on/>);
//   const element = screen.getByRole('button')
//   expected(element).toHaveClass(expected)
// })
});
