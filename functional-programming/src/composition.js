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

export const DangerButton = (props) => {
  return <Button {...props} color="red" />;
};

export const SuccessButton = (props) => {
  return <Button {...props} color="green" />;
};
