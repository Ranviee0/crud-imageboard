const express = require('express');
const server = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testDB',
    port: '3306'
});

server.use(express.json());
server.use(cors());

db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log('MySQL successfully connected!');
});

server.get("/images", (req, res) => {
    
    const sql = "SELECT * FROM Image";
    db.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

server.get("/SpecificImage/:id", (req, res) => {
    const id = req.params.id;

    db.query( "SELECT * FROM Image WHERE ImgID = (?)", [id],
     (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })

})

server.get("/SpecificCharact/:id", (req, res) => {
    const id = req.params.id;

    db.query( "SELECT * FROM Charact WHERE ImgID = (?)", [id],
     (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })

})

server.get("/SpecificTag/:id", (req, res) => {
    const id = req.params.id;

    db.query( "SELECT * FROM Tag WHERE ImgID = (?)", [id],
     (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })

})

server.get("/SpecificSeries/:id", (req, res) => {
    const id = req.params.id;

    db.query( "SELECT * FROM Series WHERE ImgID = (?)", [id],
     (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })

})


server.get("/SpecificComment/:id", (req, res) => {
    const id = req.params.id;

    db.query( "SELECT * FROM Comment WHERE ImgID = (?)", [id],
     (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })

})

server.delete("/deleteImages/:id", (req, res) => {
    const id = req.params.id;

    db.query( "DELETE FROM Image WHERE ImgID = (?)", [id],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Deleted");
            }
    });
});

server.delete("/deleteTags/:id", (req, res) => {
    const id = req.params.id;

    db.query( "DELETE FROM Tag WHERE ImgID = (?)", [id],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Deleted");
            }
    });
});

server.delete("/deleteCharacts/:id", (req, res) => {
    const id = req.params.id;

    db.query( "DELETE FROM Charact WHERE ImgID = (?)", [id],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Deleted");
            }
    });
});

server.delete("/deleteSeries/:id", (req, res) => {
    const id = req.params.id;

    db.query( "DELETE FROM Series WHERE ImgID = (?)", [id],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Deleted");
            }
    });
});

server.delete("/deleteComment/:id", (req, res) => {
    const id = req.params.id;

    db.query( "DELETE FROM Comment WHERE ImgID = (?)", [id],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Deleted");
            }
    });
});


server.put("/updateImage1", (req, res) => {
    const ImgID = req.body.ImgID;
    const ImgURL = req.body.ImgURL;
    const ImgName = req.body.ImgName;

    db.query("UPDATE Image SET ImgName = (?) WHERE ImgID = (?)", [ImgName, ImgID],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
    });
});

server.put("/updateImage2", (req, res) => {
    const ImgID = req.body.ImgID;
    const ImgURL = req.body.ImgURL;
    const ImgName = req.body.ImgName;

    db.query("UPDATE Image SET ImgURL = (?) WHERE ImgID = (?)", [ImgURL, ImgID],
    (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
    });
});


server.post("/add", (req, res) => {
    const ImgURL = req.body.ImgURL;
    const ImgName = req.body.ImgName;

    db.query( "INSERT INTO Image (ImgURL, ImgName) VALUES (?,?)", [ImgURL,ImgName],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
    });
});

server.post("/tags", (req, res) => {
    const ImgID = req.body.ImgID;
    const TagName = req.body.TagName;

    db.query("INSERT INTO Tag (ImgID, TagName) VALUES (?,?)", [ImgID,TagName],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
    });
});

server.post("/characts", (req, res) => {
    const ImgID = req.body.ImgID;
    const CharactName = req.body.CharactName;

    db.query( "INSERT INTO Charact (ImgID, CharactName) VALUES (?,?)", [ImgID,CharactName],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
    });
});

server.post("/series", (req, res) => {
    const ImgID = req.body.ImgID;
    const SeriesName = req.body.SeriesName;

    db.query( "INSERT INTO Series (ImgID, SeriesName) VALUES (?,?)", [ImgID,SeriesName],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
    });
});

server.post("/comment", (req, res) => {
    const ImgID = req.body.ImgID;
    const CommentText = req.body.CommentText;

    db.query( "INSERT INTO Comment (ImgID, CommentText) VALUES (?,?)", [ImgID,CommentText],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
    });
});

server.get("/latestid", (req, res) => {
    const sql = "SELECT Image.ImgID FROM Image ORDER BY Image.ImgID DESC LIMIT 1";
    db.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

server.listen(3000, () => console.log('Server is running on port 3000'));