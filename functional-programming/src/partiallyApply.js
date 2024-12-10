export const partiallyApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === 'large' ? '4em' : '1em',
        fontSize: size === 'large' ? '4em' : '2em',
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const PartialDangerButton = partiallyApply(Button, { color: 'red' });
export const PartialSuccessButton = partiallyApply(Button, { color: 'green', size: 'large' });