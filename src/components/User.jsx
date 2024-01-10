const User = ({ props, onClick }) => {
  const {
    name: { title, first, last },
    picture: { medium },
  } = props;

  return (
    <>
      <div className="user" onClick={onClick}>
        <img src={medium} alt="" className="userImg" />
        <p style={{ fontSize: 15 }}>{`${title}. ${first} ${last}`}</p>
      </div>
    </>
  );
};

export default User;
