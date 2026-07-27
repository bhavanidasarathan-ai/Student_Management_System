const Button = ({
  text,
  color = "#2563eb",
  textColor = "#fff",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: color,
        color: textColor,
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
