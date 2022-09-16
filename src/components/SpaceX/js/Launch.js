export default function Launch (props){
    let {launch} = props;
    return(
        <div className={'card'}>
            <h4>{launch.mission_name} - {launch.launch_year}</h4>
            <img src={launch.links.mission_patch_small
            } alt="mission_patch_small"/>

        </div>
    )
}