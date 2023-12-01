import Axios from 'axios'
import React, { useState, useEffect } from 'react'

function Add() {

    const [Img, setImg] = useState([]);
    const [ImgName, setImgName] = useState('');
    const [ImgURL, setImgURL] = useState('');

    const [Tags, setTags] = useState([]);
    const [TagsString, setTagsString] = useState('');

    const [Characts, setCharacts] = useState([]);
    const [CharactsString, setCharactsString] = useState('');

    const [Series, setSeries] = useState([]);
    const [SeriesString, setSeriesString] = useState('');

    const [Comment, setComment] = useState([]);
    const [CommentString, setCommentString] = useState('');

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const buttonAction = async () => {
        addImg();
        await delay(1000);
        addTag();
        addCharact();
        addSeries();
        addComment();
    }

    const addTag = () => {
        const getInsertLatest = () => {
            Axios.get("http://localhost:3000/latestid").then((response) => {
                const imgIdArray = response.data.map((item) => item.ImgID);
                const brokenString = TagsString.split(',');
                for (var i = 0; i < brokenString.length; i++) {
                    //console.log(brokenString[i]);
                    const imgIdArrayInt = parseInt(imgIdArray);
                    AddTag(imgIdArrayInt.toString(), brokenString[i]);
                }
            })
        }
        const AddTag = (ImgID, TagName) => {
            Axios.post("http://localhost:3000/tags", {
                ImgID: ImgID,
                TagName: TagName,
            }).then(() => {
                setTags([
                    ...Tags,
                    {
                        ImgID: ImgID,
                        TagName: TagName,
                    }
                ]);
            })
        }
        getInsertLatest();
    }

    const addCharact = () => {
        const getInsertLatest = () => {
            Axios.get("http://localhost:3000/latestid").then((response) => {
                const imgIdArray = response.data.map((item) => item.ImgID);
                const brokenString = CharactsString.split(',');
                for (var i = 0; i < brokenString.length; i++) {
                    //console.log(brokenString[i]);
                    const imgIdArrayInt = parseInt(imgIdArray);
                    AddCharact(imgIdArrayInt.toString(), brokenString[i]);
                }
            })
        }
        const AddCharact = (ImgID, CharactName) => {
            Axios.post("http://localhost:3000/characts", {
                ImgID: ImgID,
                CharactName: CharactName,
            }).then(() => {
                setCharacts([
                    ...Characts,
                    {
                        ImgID: ImgID,
                        CharactName: CharactName,
                    }
                ]);
            })
        }
        getInsertLatest();
    }

    const addSeries = () => {
        const getInsertLatest = () => {
            Axios.get("http://localhost:3000/latestid").then((response) => {
                const imgIdArray = response.data.map((item) => item.ImgID);
                const brokenString = SeriesString.split(',');
                for (var i = 0; i < brokenString.length; i++) {
                    const imgIdArrayInt = parseInt(imgIdArray);
                    AddSeries(imgIdArrayInt.toString(), brokenString[i]);
                }
            })
        }
        const AddSeries = (ImgID, SeriesName) => {
            Axios.post("http://localhost:3000/series", {
                ImgID: ImgID,
                SeriesName: SeriesName,
            }).then(() => {
                setSeries([
                    ...Series,
                    {
                        ImgID: ImgID,
                        SeriesName: SeriesName,
                    }
                ]);
            })
        }
        getInsertLatest();
    }

    const addComment = () => {
        const getInsertLatest = () => {
            Axios.get("http://localhost:3000/latestid").then((response) => {
                const imgIdArray = response.data.map((item) => item.ImgID);
                const brokenString = CommentString.split(',');
                for (var i = 0; i < brokenString.length; i++) {
                    const imgIdArrayInt = parseInt(imgIdArray);
                    AddComment(imgIdArrayInt.toString(), brokenString[i]);
                }
            })
        }
        const AddComment = (ImgID, CommentText) => {
            Axios.post("http://localhost:3000/comment", {
                ImgID: ImgID,
                CommentText: CommentText,
            }).then(() => {
                setComment([
                    ...Comment,
                    {
                        ImgID: ImgID,
                        CommentText: CommentText,
                    }
                ]);
            })
        }
        getInsertLatest();
    }

    const addImg = () => {
        Axios.post("http://localhost:3000/add", {
            ImgName: ImgName,
            ImgURL: ImgURL,
        }).then(() => {
            setImg([
                ...Img,
                {
                    ImgName: ImgName,
                    ImgURL: ImgURL,
                }
            ]);
        })
    }

    return (
        <div>
            <div>
                <p>ImgName</p>
                <input type="text"
                    onChange={(event) => {
                        setImgName(event.target.value)
                    }}
                ></input>
            </div>
            <div>
                <p>ImgURL</p>
                <input type="text"
                    onChange={(event) => {
                        setImgURL(event.target.value)
                    }}
                ></input>
            </div>
            <div>
                <p>Tags</p>
                <input type="text"
                    onChange={(event) => {
                        setTagsString(event.target.value)
                    }}
                ></input>
            </div>
            <div>
                <p>Characts</p>
                <input type="text"
                    onChange={(event) => {
                        setCharactsString(event.target.value)
                    }}
                ></input>
            </div>
            <div>
                <p>Series</p>
                <input type="text"
                    onChange={(event) => {
                        setSeriesString(event.target.value)
                    }}
                ></input>
            </div>
            <div>
                <p>Comment</p>
                <input type="text"
                    onChange={(event) => {
                        setCommentString(event.target.value)
                    }}
                ></input>
            </div>
            <div>
                <button
                    onClick={buttonAction}
                >Send</button>
            </div>
        </div>
    );

}

export default Add