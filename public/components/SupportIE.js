//define custom element
//Component extends HTMLElement
export default class SupportIE extends HTMLElement{
    constructor(){
        super();
        console.log(this)//<surrport-ie></surrport-ie>
        this.innerHTML = `
        <noscript>이 사이트를 이용하려면? 사용 중인 웹 브라우저에서 JavaScript를 활성화 해야 합니다.</noscript>
        <!--[if IE]>
        <div class="notice--upgrade-browser">
          <h1>서비스를 정상적으로 이용할 수 없습니다.</h1>
          <p>
            사용 중인 오래된 웹 브라우저를 사용하면 서비스를 정상적으로 이용할 수 없습니다. 안전하고 빠른 서비스 이용을 위해
            <a href="https://browsehappy.com/?locale=ko_KR" target="_blank" rel="noopener noreferrer">
              구형 웹 브라우저를 최신 브라우저로 업그레이드 하세요<span style="font-style: italic">!</span>
            </a>
          </p>
        </div>
        <![endif]-->
        `
    }
    //method 

}

//Component extends HTMLParagraphElement
customElements.define("support-ie", SupportIE)