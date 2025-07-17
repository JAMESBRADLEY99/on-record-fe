import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function AlbumPage() {
    const { albumId } = useParams();
    const [albumData, setAlbumData] = useState(null);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
            const res = await fetch(`http://localhost:9000/album/${albumId}`);
            const data = await res.json();
            setAlbumData(data);
            } catch (err) {
            console.error(err);
            }
        };

        fetchAlbum();
        }, [albumId]);

    return (
        <>
        {albumData? (
                <div className='main'>
                    <h1>{albumData.name}</h1>
                    <h3>{albumData.artist}</h3>
                    <img src={albumData.album_art} alt={albumData.name}/>
                    <ol>
                        {albumData.track_listing?.map((track, index) => (
                            <li key={index}>
                                <p>{track.name}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            ) : (
                <p></p>
            )}
        </>
    )
}

export default AlbumPage;