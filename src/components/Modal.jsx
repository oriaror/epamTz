import "./modal.css";
const Modal = ({ props, setModalShow }) => {
  const {
    picture: { large },
    location: {
      street: { number, name },
      city,
      state,
    },
    email,
    phone,
  } = props;

  return (
    <>
      <div className="back" onClick={setModalShow}></div>
      <div className="modal">
        <img src={large} alt="" className="img" />
        <div className="info">
          <p className="content">{`State: ${state}`}</p>
          <p className="content">{`City: ${city}`}</p>
          <p className="content">{`Street Name: ${name} ${number}`}</p>
          <p className="content">{`Email: ${email}`}</p>
          <p className="content">{`Phone:  ${phone}`}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
