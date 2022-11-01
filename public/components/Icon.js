var state = {
  upload: '../assets/arrow.svg',
  uploading: '../assets/loading-spinner.svg',
  uploaded: '../assets/check.svg',
  failed: '../assets/x.svg',
  cantupload: '../assets/ban.svg'
};
export var Icon = function Icon(_ref) {
  var children = _ref.children;
  var style = {
    float: 'right'
  };
  return React.createElement("img", {
    style: style,
    src: state[children]
  });
};
//# sourceMappingURL=Icon.js.map