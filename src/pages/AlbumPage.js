import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function AlbumPage() {
    const { albumId } = useParams();
    const [albumData, setAlbumData] = useState('');

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
        <div className='main'>
            <h1>{albumData.name}</h1>
        </div>
    )
}

export default AlbumPage;