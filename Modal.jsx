const Modal = ({ title, children }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,.3)",
        minWidth: "350px",
      }}
    >
      <h2>{title}</h2>
      <hr />
      {children}
    </div>
  );
};

export default Modal;
