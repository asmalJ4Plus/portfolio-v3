type ControlledFadeProps = {
  children: JSX.Element | JSX.Element[];
  show: boolean;
  style?: {};
  slide?: 'up' | 'down' | 'left' | 'right';
};

const ControlledFade = ({ children, show, style = {}, slide = 'up' }: ControlledFadeProps) => {
  const getTransform = () => {
    switch (slide) {
      case 'up':
        return `translate3d(0, ${show ? 0 : 50}px, 0)`;
      case 'down':
        return `translate3d(0, ${show ? 0 : -50}px, 0)`;
      case 'left':
        return `translate3d(${show ? 0 : 50}px, 0, 0)`;
      case 'right':
        return `translate3d(${show ? 0 : -50}px, 0, 0)`;
      default:
        return '';
    }
  };

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: getTransform(),
        transition: 'opacity 1s, transform 1s',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ControlledFade;
