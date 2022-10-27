<<<<<<< HEAD
import 'core-js';
((global) => {
  'use strict';
  // 브라우저 (사용자 에이전트) 정보
  const {userAgent} = navigator;

  //IOS 운영체제 여부 확인 유틸리티 함수
=======
import * as Utils from '../utils/index.js';
>>>>>>> f458ae1befce1a23a0c2d9f06a33ab3999217f7c

let price = 984_000;

console.log(Utils.numberWithComma(price));
console.log(Utils.currency(price));
console.log(Utils.currencyKR(price));
