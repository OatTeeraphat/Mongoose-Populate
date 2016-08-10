var articles1 = [
  {
    _id: 1,
    name: Array(100).join("article1 "),
    readTime: 2, //min to read, compute everytime an article updated
    //filename
    coverPic: 'my-cover-pig.jpg',
    shortContent : 'Hello World!' //path raw file 
  },
  {
    _id: 2,
    name: Array(100).join("article2 ") ,
    readTime: 2, //min to read, compute everytime an article updated
    //filename
    coverPic: 'my-cover-pig.jpg',
    shortContent : 'Hello World!' //path raw file 
  },
  {
    _id: 3,
    name: Array(100).join("article3 ") ,
    readTime: 2, //min to read, compute everytime an article updated
    //filename
    coverPic: 'my-cover-pig.jpg',
    shortContent : 'Hello World!' //path raw file 
  }
];

var articles2 = [
  {
    _id: 10,
    name: Array(100).join("article10 ") ,
    readTime: 2, //min to read, compute everytime an article updated
    //filename
    coverPic: 'my-cover-pig.jpg',
    shortContent : 'Hello World!' //path raw file 
  },
  {
    _id: 11,
    name: Array(100).join("article11 ") ,
    readTime: 2, //min to read, compute everytime an article updated
    //filename
    coverPic: 'my-cover-pig.jpg',
    shortContent : 'Hello World!' //path raw file 
  }
];

var publisher = {
  _id: 1, 
  name: Array(100).join("publisher1 ") ,
  desc: Array(100).join("a") ,
  //filename
  profilePic: 'profile.jpg',
  //filename
  coverPic: 'cover.jpg',
  
  columns: columns
}

var columns = [
  {
    _id: 1, 
    name: Array(50).join("column1 "),
    //filename
    profilePic: 'profile.jpg',
    //filename
    coverPic: 'cover.jpg',
    
    _publisher: publisher,
    articles: articles1,

    // when child articles updated, this field'll be updated as well.
    updated: new Date()
  },
  {
    _id: 2, 
    name: Array(50).join("column2 "),
    //filename
    profilePic: 'profile.jpg',
    //filename
    coverPic: 'cover.jpg',
    
    _publisher: publisher,
    articles: articles2,

    // when child articles updated, this field'll be updated as well.
    updated: new Date((new Date()).getTime()+60000*10)
  }
];

module.exports = {
  columns: columns,
  articles1: articles1,
  articles2: articles2,
  publisher: publisher
}