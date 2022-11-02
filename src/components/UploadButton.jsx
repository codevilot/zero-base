import Icon from './Icon.js';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '89px',
  height: '30px',
  padding: '9px 13.5px 9px 12px',
  background: '#FFFFFF',
  boxShadow: '0px 4px 4px #DBDDF0',
  border: 'none',
  borderRadius: '30px',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '12px',
  cursor: 'pointer',
};

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
    <button
      style={{ ...style, cursor: isDisabled ? 'not-allowed' : 'pointer' }}
      disabled={isDisabled}
    >
      <span style={{ color: isDisabled ? '#ADAEB6' : '#525577' }}>
        {statusMsg[status]}
      </span>
      <Icon type={status} />
    </button>
  );
};

export default UploadButton;
