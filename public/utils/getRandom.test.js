<<<<<<< HEAD
import {getRandom} from "./getRandom.js";

test('getRandom(10)의 반환 값은 0보다 크거나 같고, 10보다 작거나 같다.', () =>{
    //기대 값  expect
    //전달 값 received
    expect(getRandom(10)).toBeLessThenOrEqual()
})
=======
import { getRandom } from './getRandom.js';

test('getRandom(10)의 반환 값은 0보다 크거나 같고, 10보다 작거나 같다.', () => {
  expect(getRandom(10)).toBeLessThanOrEqual(10);
});
>>>>>>> 4c3c68d894b82da71de12b2722cd841cba7aeb6d
