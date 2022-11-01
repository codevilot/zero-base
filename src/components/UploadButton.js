import { Icon } from './Icon.js';
export const UploadButton = ({ children, state }) => {
  const buttonDefault = {
    upload: '업로드',
    uploading: '옵로드중',
    uploaded: '완료',
    failed: '실패',
    cantupload: '업로드',
  };
  const style = {
    width: '90px',
    height: '30px',
    fontSize: '12px',
    borderRadius: '15px',
    textAlign: 'left',
    border: '0px',
    boxShadow: '0px 4px 4px #DBDDF0',
  };
  return (
    <button style={style}>
      {children ?? buttonDefault[state]} <Icon>{state}</Icon>
    </button>
  );
};
