const state = {
  upload: '../assets/arrow.svg',
  uploading: '../assets/loading-spinner.svg',
  uploaded: '../assets/check.svg',
  failed: '../assets/x.svg',
  cantupload: '../assets/ban.svg',
};

export const Icon = ({ children }) => {
  const style = {
    float: 'right',
  };
  return <img style={style} src={state[children]} />;
};
