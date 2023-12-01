CREATE DATABASE testDB;
USE testDB;

CREATE TABLE `Image` (
`ImgID` INT AUTO_INCREMENT,
`ImgURL` VARCHAR(4096),
`ImgName` VARCHAR(256),
PRIMARY KEY (ImgID)
);

CREATE TABLE `Charact` (
`CharactID` INT AUTO_INCREMENT,
`CharactName` VARCHAR(256),
`ImgID` INT,
PRIMARY KEY (CharactID),
FOREIGN KEY (ImgID) REFERENCES Image(ImgID)
);

CREATE TABLE `Tag` (
`TagID` INT AUTO_INCREMENT,
`TagName` VARCHAR(256),
`ImgID` INT,
PRIMARY KEY (TagID),
FOREIGN KEY (ImgID) REFERENCES Image(ImgID)
);

CREATE TABLE `Series` (
`SeriesID` INT AUTO_INCREMENT,
`SeriesName` VARCHAR(256),
`ImgID` INT,
PRIMARY KEY (SeriesID),
FOREIGN KEY (ImgID) REFERENCES Image(ImgID)
);

CREATE  TABLE `Comment` (
`CommentID` INT AUTO_INCREMENT,
`CommentText` VARCHAR(256),
`ImgID` INT,
PRIMARY KEY (CommentID),
FOREIGN KEY (ImgID) REFERENCES Image(ImgID)
);


