function SimpsonComponent(props) {
    let {itemName, picture} = props;
    return(
        <div className={'simpson'}>
            <h2>{itemName}</h2>
            <img src={picture}/>
        </div>
    );
}
export default SimpsonComponent;