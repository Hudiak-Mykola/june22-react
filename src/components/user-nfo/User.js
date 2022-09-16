export default function User (props){
    let {user,lift} = props;
    return(
        <div>
            {user.id} - {user.name} <br/>
            <button onClick={()=>{
                lift(user)
            }}>details</button>
        </div>
    )
}