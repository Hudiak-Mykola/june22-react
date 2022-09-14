export function Character(props) {
    let {character} = props;
    return(
        <div className={'card'}>
            <div>
                <div className={'information'}>
                    <h4>{character.id} - {character.name}<br/></h4>
                    {character.status}<br/>
                    {character.species}<br/>
                    {character.gender}<br/>
                </div>
                <div className={'image'}>
                    <img src={character.image}/>
                </div>


            </div>
        </div>
    )
}