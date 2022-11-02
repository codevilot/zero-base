import Icon from './Icon.js';

const statusMsg = {
  idle: '업로드',
  pending: '업로드 중',
  resolved: '완료',
  rejected: '실패',
  disabled: '업로드',
};

const UploadButton = (props) => {
  const status = props.status;
  const isDisabled = status === 'disabled';

  return (
    <button disabled={isDisabled}>
      <span>{statusMsg[status]}</span>
      <Icon type={status} />
    </button>
  );
};

export default UploadButton;
