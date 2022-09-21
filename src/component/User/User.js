

function User(props) {
    const {user} = props;
    return (
        <div>
            {user.id} {user.name} <br/> {user.email} <br/> {user.phone}
        </div>
    );
}

export default User;