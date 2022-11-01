import { UploadButton } from './UploadButton.js';
export function App() {
  var style = {
    height: '270px',
    width: '129px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };
  return React.createElement("div", {
    style: style
  }, React.createElement(UploadButton, {
    state: "upload"
  }), React.createElement(UploadButton, {
    state: "uploading"
  }), React.createElement(UploadButton, {
    state: "uploaded"
  }, "\uCEE4\uC2A4\uD140\uC644\uB8CC"), React.createElement(UploadButton, {
    state: "failed"
  }, "\uCEE4\uC2A4\uD140\uC2E4\uD328"), React.createElement(UploadButton, {
    state: "cantupload"
  }));
}
//# sourceMappingURL=App.js.map