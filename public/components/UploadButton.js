import { Icon } from './Icon.js';
export var UploadButton = function UploadButton(_ref) {
  var children = _ref.children,
      state = _ref.state;
  var buttonDefault = {
    upload: '업로드',
    uploading: '옵로드중',
    uploaded: '완료',
    failed: '실패',
    cantupload: '업로드'
  };
  var style = {
    width: '90px',
    height: '30px',
    fontSize: '12px',
    borderRadius: '15px',
    textAlign: 'left',
    border: '0px',
    boxShadow: '0px 4px 4px #DBDDF0'
  };
  return React.createElement("button", {
    style: style
  }, children != null ? children : buttonDefault[state], " ", React.createElement(Icon, null, state));
};
//# sourceMappingURL=UploadButton.js.map