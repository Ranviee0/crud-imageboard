import Axios from 'axios'
import { useState, useEffect } from 'react'

function Home() {

    const [ImgList, setImgList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/images').then((response) => {
            setImgList(response.data);
        })
    }, []);

    return (
        <div>
            {ImgList.map((image) => (
                <div key={image.ImgID}>
                    <img src={image.ImgURL} alt={image.ImgName} height="200" />
                    <p>{image.ImgID + "," + image.ImgName}</p>
                </div>
            ))}
        </div>
    )
}

export default Home