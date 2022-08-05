window.onload = function () {
    var temp_movie_name = document.getElementById("movie-name").innerHTML
    localStorage.setItem('lcl_movie_name', temp_movie_name);
};