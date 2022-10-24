class Media {
    constructor(title){    
      this._title = title;    
      this._isCheckedOut = false;   
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set isCheckedOut(value){
      this._isCheckedOut = value;
    }
   toggleCheckOutStatus(){      
        this.isCheckedOut = !this.isCheckedOut;
       
    }
     // sum all rating numbers in array and divide it with the length of array
    getAverageRating(){
     let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum/ this.ratings.length;
    }
  
    addRating(value){
       this.ratings.push(value)
    }
  }
  
  // book class
  class Book extends Media{
    constructor(author, title, pages){
      super(title);
      this._author = author;   
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
    }
  
  // movie class
    class Movie extends Media{
      constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
      }
      get director(){
        return this._director;
      }
      get runTime(){
        return this._runTime;
      }
    }
    // cd class
  class CD extends Media {
      constructor(artist, title, songs) {
          super(title);
          this._artist = artist;
          this._songs = songs;  
      }
      get artist() {
          return this._artist;
      }
      get songs() {
          return this._songs;
      }
      // get randomly sorted array of all the songs in the songs property
      shuffle() {
         return this._songs.sort(() => Math.random() - 5);
      }
  }
    //------------------------new book ---------------------------
    const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  //-------------------------new Movie ----------------------------
  const speed = new Movie('Jan de Bont','Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating())
  //------------------------Start Cd ---------------------------------
  const stateOfTrance = new CD('Armin Van buuren', 'State of Trance', ['first song', 'second song', 'theerd song', 'Another song', 'Last song']);
  
  stateOfTrance.toggleCheckOutStatus();
  console.log(stateOfTrance.isCheckedOut);
  
  stateOfTrance.addRating(4);
  stateOfTrance.addRating(5);
  stateOfTrance.addRating(5);
  // return shuffled songs
  console.log(stateOfTrance.shuffle());
  