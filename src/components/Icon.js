const ICON_PATH = './assets/icons';

const iconSrc = {
  idle: 'type=up-arrow.svg',
  pending: 'type=spinner-animate.svg',
  resolved: 'type=check-mark.svg',
  rejected: 'type=cross.svg',
  disabled: 'type=not-allowed.svg',
};

const Icon = (props) => {
  return <img src={`${ICON_PATH}/${iconSrc[props.type]}`} />;
};

export default Icon;
