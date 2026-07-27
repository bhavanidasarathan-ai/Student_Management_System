import { useAuthContext } from "./AuthContext";

function UserProfile() {

const { currentUser } = useAuthContext();

return(

<div>

<h2>User Profile</h2>

<hr/>

<p>

Email :

{currentUser?.email}

</p>

<p>

UID :

{currentUser?.uid}

</p>

</div>

)

}

export default UserProfile;
