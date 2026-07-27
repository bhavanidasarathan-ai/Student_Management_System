const Profile = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Profile</h1>

      <img
        src="https://via.placeholder.com/150"
        alt="profile"
        style={{ borderRadius: "50%" }}
      />

      <h2>Priya</h2>

      <p>Email : priya@gmail.com</p>

      <p>Department : Software Systems</p>

      <p>Year : IV</p>

      <button>Edit Profile</button>
    </div>
  );
};

export default Profile;
