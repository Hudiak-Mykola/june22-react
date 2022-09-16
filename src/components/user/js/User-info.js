export default function UserInfo (props){
    let {user} = props;
    return(
        <div className={'userInfo'}>
            <p><b>email:</b> {user.email}</p>
            <p><b>phone:</b> {user.phone}</p>
            <p><b>website:</b> {user.website}</p>
            <p><b>username:</b> {user.username}</p>
            <p><b>city:</b> {user.address.city}</p>
            <p><b>street:</b> {user.address.street}</p>
            <p><b>suite:</b> {user.address.suite}</p>
            <p><b>zipcode:</b> {user.address.zipcode}</p>
        </div>
    )
}