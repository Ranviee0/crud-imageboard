import Axios from 'axios'
import React, { useState, useEffect } from 'react'

function Edit() {

    const [Img1, setImg1] = useState([]);
    const [Img2, setImg2] = useState([]);
    const [ImgIDtoEdit, setImgIDtoEdit] = useState();
    const [ImgName, setImgName] = useState();
    const [Tags, setTags] = useState([]);
    const [Charact, setCharact] = useState([]);
    const [ImgURL, setImgURL] = useState();
    const [TagsString, setTagsString] = useState();
    const [Comment, setComment] = useState([]);
    const [CommentString, setCommentString] = useState();
    const [Series, setSeries] = useState([]);
    const [SeriesString, setSeriesString] = useState();
    const [CharactsString, setCharactsString] = useState();
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    const buttonAction = async () => {
        let id = ImgIDtoEdit.toString();
        console.log(id);
        editTag(id);
        editCharact(id);
        editComment(id);
        editSeries(id);
        await delay(100);
        editImage1(id);
        editImage2(id);
    }

    const editTag = (id) => {
        const deleteOldTag = (id) => {
            Axios.delete(`http://localhost:3000/deleteTags/${id}`).then((response) => {
            })
        }
        const InsertSpecificTag = (id) => {
            const brokenString = TagsString.split(',');
            for (var i = 0; i < brokenString.length; i++) {
                AddTag(id, brokenString[i]);
            }
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
        deleteOldTag(id);
        InsertSpecificTag(id);
    }

    const editCharact = (id) => {
        const deleteOldCharact = (id) => {
            Axios.delete(`http://localhost:3000/deleteCharacts/${id}`).then((response) => {
            })
        }
        const InsertSpecificCharact = (id) => {
            const brokenString = CharactsString.split(',');
            for (var i = 0; i < brokenString.length; i++) {
                AddCharact(id, brokenString[i]);
            }
        }
        const AddCharact = (ImgID, CharactName) => {
            Axios.post("http://localhost:3000/characts", {
                ImgID: ImgID,
                CharactName: CharactName,
            }).then(() => {
                setCharact([
                    ...Charact,
                    {
                        ImgID: ImgID,
                        CharactName: CharactName,
                    }
                ]);
            })
            console.log(CharactName);
        }
        deleteOldCharact(id);
        InsertSpecificCharact(id);
    }

    const editComment = (id) => {
        const deleteOldComment = (id) => {
            Axios.delete(`http://localhost:3000/deleteComment/${id}`).then((response) => {
            })
        }
        const InsertSpecificComment = (id) => {
            const brokenString = CommentString.split(',');
            for (var i = 0; i < brokenString.length; i++) {
                AddComment(id, brokenString[i]);
            }
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
            console.log(CommentText);
        }
        deleteOldComment(id);
        InsertSpecificComment(id);
    }

    const editSeries = (id) => {
        const deleteOldSeries = (id) => {
            Axios.delete(`http://localhost:3000/deleteSeries/${id}`).then((response) => {
            })
        }
        const InsertSpecificSeries = (id) => {
            const brokenString = SeriesString.split(',');
            for (var i = 0; i < brokenString.length; i++) {
                AddSeries(id, brokenString[i]);
            }
        }
        const AddSeries = (ImgID, SeriesName) => {
            Axios.post("http://localhost:3000/comment", {
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
            console.log(SeriesName);
        }
        deleteOldSeries(id);
        InsertSpecificSeries(id);
    }

    const editImage1 = () => {
        Axios.put("http://localhost:3000/updateImage1", {
            ImgID: ImgIDtoEdit,
            ImgName: ImgName,
            ImgURL: ImgURL,
        }).then(() => {
            setImg1([
                ...Img1,
                {
                    ImgID: ImgIDtoEdit,
                    ImgName: ImgName,
                    ImgURL: ImgURL,
                }
            ]);
        })
    }

    const editImage2 = () => {
        Axios.put("http://localhost:3000/updateImage2", {
            ImgID: ImgIDtoEdit,
            ImgName: ImgName,
            ImgURL: ImgURL,
        }).then(() => {
            setImg2([
                ...Img2,
                {
                    ImgID: ImgIDtoEdit,
                    ImgName: ImgName,
                    ImgURL: ImgURL,
                }
            ]);
        })
    }


    return (
        <div>
            <div>
                <p>ImgID to Edit</p>
                <input type="text"
                    onChange={(event) => {
                        setImgIDtoEdit(event.target.value)
                    }}
                ></input>
            </div>
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
                >Update</button>
            </div>
        </div>
    );

}

export default Edit