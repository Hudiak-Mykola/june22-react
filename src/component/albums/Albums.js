import {useEffect, useState} from "react";

import {Service} from "../../services";
import Album from "../album/Album";

const Albums = () => {

    const [albums, setalbums] = useState([])

    useEffect(()=>{
        Service.getAlbums().then(value => setalbums(value.data))
    },[])
    return (
        <div>
            {
                albums.map(album=><Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export default Albums;