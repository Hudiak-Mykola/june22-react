import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            {user.name} -- {user.username}
            <span><Link to={user.id.toString()}>Single User</Link></span>
        </div>
    );
};

export default User;