export default function UserInfo (props){
    let {user} = props;
    return(
        <div>
            <h4>{user.email}</h4>
            <h4>{user.phone}</h4>
            <h4>{user.website}</h4>
            <h4>{user.username}</h4>
            <h4>{user.address.city}</h4>
            <h4>{user.address.street}</h4>
            <h4>{user.address.suite}</h4>
            <h4>{user.address.zipcode}</h4>
        </div>
    )
}