import Axios from 'axios'
import React, { useState, useEffect } from 'react'

function Delete() {

    const [willBeDeleted, setWillBeDeleted] = useState([]);

    const buttonAction = () => {
        console.log(willBeDeleted);
        deleteTag(willBeDeleted);
        deleteCharact(willBeDeleted);
        deleteImage(willBeDeleted);
        deleteSeries(willBeDeleted);
        deleteComment(willBeDeleted);
    }

    const deleteTag = (id) => {
        Axios.delete(`http://localhost:3000/deleteTags/${id}`).then((response) => {
        })
    }

    const deleteCharact = (id) => {
        Axios.delete(`http://localhost:3000/deleteCharacts/${id}`).then((response) => {
        })
    }

    const deleteImage = (id) => {
        Axios.delete(`http://localhost:3000/deleteImages/${id}`).then((response) => {
        })
    }

    const deleteSeries = (id) => {
        Axios.delete(`http://localhost:3000/deleteSeries/${id}`).then((response) => {
        })
    }

    const deleteComment = (id) => {
        Axios.delete(`http://localhost:3000/deleteComment/${id}`).then((response) => {
        })
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    onChange={(event) => {
                        setWillBeDeleted(event.target.value)
                    }}
                >
                </input>
            </div>
            <div>
                <button
                    onClick={buttonAction}
                >Delete</button>
            </div>
        </div>
    );

}

export default Delete