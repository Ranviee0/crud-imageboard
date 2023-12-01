import Axios from 'axios'
import React, { useState, useEffect } from 'react'

function View() {

    const [ImgID, setImgID] = useState();
    const [ImgList, setImgList] = useState([]);
    const [CharactList, setCharactList] = useState([]);
    const [TagList, setTagList] = useState([]);
    const [SeriesList, setSeriesList] = useState([]);
    const [CommentList, setCommentList] = useState([]);

    const buttonAction = () => {
        retrieve(ImgID);
        retrieveCharact(ImgID);
        retrieveTag(ImgID);
        retrieveSeries(ImgID);
        retrieveComment(ImgID);
    }

    const retrieve = (id) => {
        Axios.get(`http://localhost:3000/SpecificImage/${id}`).then((response) => {
            setImgList(response.data);
        })
    }

    const retrieveCharact = (id) => {
        Axios.get(`http://localhost:3000/SpecificCharact/${id}`).then((response) => {
            setCharactList(response.data);
        })
    }

    const retrieveTag = (id) => {
        Axios.get(`http://localhost:3000/SpecificTag/${id}`).then((response) => {
            setTagList(response.data);
        })
    }

    const retrieveSeries = (id) => {
        Axios.get(`http://localhost:3000/SpecificSeries/${id}`).then((response) => {
            setSeriesList(response.data);
        })
    }
    const retrieveComment = (id) => {
        Axios.get(`http://localhost:3000/SpecificComment/${id}`).then((response) => {
            setCommentList(response.data);
        })
    }

    return (
        <div>
            <div>
                <p>View</p>
                <p>Insert ID Here</p>
                <input
                    onChange={(event) => {
                        setImgID(event.target.value)
                    }}
                    type="text">
                </input>
                <button
                    onClick={buttonAction}>
                    View
                </button>
            </div>
            <div>
                {ImgList.map((image) => (
                    <div key={image.ImgID}>
                        <img src={image.ImgURL} alt={image.ImgName} />
                        <p>{image.ImgID + "," + image.ImgName}</p>
                    </div>
                ))}
            </div>
            <div>
                {TagList.map((tag) => (
                    <div key={tag.TagID}>
                        <p>{tag.TagName}</p>
                    </div>
                ))}
            </div>
            <div>
                {CharactList.map((charact) => (
                    <div key={charact.CharactID}>
                        <p>{charact.CharactName}</p>
                    </div>
                ))}
            </div>
            <div>
                {SeriesList.map((series) => (
                    <div key={series.SeriesID}>
                        <p>{series.SeriesName}</p>
                    </div>
                ))}
            </div>
            <div>
                {CommentList.map((comment) => (
                    <div key={comment.CommentID}>
                        <p>{comment.CommentText}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default View