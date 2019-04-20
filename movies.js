class Movies{
    movieName;
    genre;
    rating;
    movieLength;
    isGood;

    constructor(movieName,genre,rating,movieLength,isGood){
        this.genre=genre;
        this.isGood=isGood;
        this.movieLength=movieLength;
        this.rating=rating;
    }
    setGenre(genre){
        this.genre=genre;
    }
    setMovieName(movieName){
        this.movieName=movieName;
    }
    setRating(rating){
        this.rating=rating;
    }
    setIsGood(isGood){
        this.isGood=isGood;
    }

    getGenre(){
        return this.genre;
    }
    getMovieName(){
        return this.movieName;
    }
    getRating(){
        return this.rating;
    }
    getIsGood(){
        return this.isGood;
    }
}