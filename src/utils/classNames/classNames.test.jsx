import { render, screen } from '@testing-library/react';
import { classNames } from './classNames';

describe('classNames 컴포넌트', () => {
  test('abc', ()=>{
    expect(classNames('a', 'b', 'c')).toBe('a b c')
  })
  test('abc', ()=>{
    expect(classNames({a:false})).toBe('')
  })
  test()
});