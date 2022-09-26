import '../style.css'

const Album = ({album}) => {
    return (
        <div className={'album'}>
            {album.id}  -  {album.title}
        </div>
    );
};

export default Album;