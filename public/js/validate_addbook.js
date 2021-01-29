
$("#login-button").click(function(){
    var title = document.getElementById('title');
    var author = document.getElementById('author');
    var genre = document.getElementById('genre');
    console.log(title.value + " " + genre.value);
    for(i=0; i<books.length; i++)
    {
        if(title.value == books[i].title && author.value == books[i].author){
            alert('Exists!!');
        }
    }
}
)



