import 'core-js';
((global) => {
  'use strict';
  // 브라우저 (사용자 에이전트) 정보
  const {userAgent} = navigator;

  //IOS 운영체제 여부 확인 유틸리티 함수

  console.log(global.navigator.userAgent);
})(globalThis);
