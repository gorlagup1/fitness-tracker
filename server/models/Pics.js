const Photos = [
    {
        PhotoID: 1,
        PhotoImage:"http://cs.newpaltz.edu/~gorlagup1/assets/pavani.jpg",
        LocaltionName: "Trail",
    },
    {
        PhotoID: 2,
        PhotoImage: "http://cs.newpaltz.edu/~gorlagup1/assets/Empire State Building.jpg",
        LocationName: "Empire State Building"
    },
    {
        PhotoID: 3,
        PhotoImage: "http://cs.newpaltz.edu/~gorlagup1/The Metropolitan Museum Of Art",
        LocationName: "The Mwtropolitan Museum Of Art"
    }
];
function addPhoto(photoimage, localtionname){
    Photos.push({
        PhotoID: Photos.length,
        PhotoImage: photoimage,
        LocationName: localname
    })
}
function updatePhoto(photoImage){
    this.image = photoImage
};
    function updateText(LocationName){
        this.text = LocationName
    }
        module.exports = {
            Photos,
            addPhoto
        }
    