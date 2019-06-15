$(document).ready(function(){

    var _url = "http://my-json-server.typicode.com/muttaqinrizal/apipwa/movies"

    var dataResult = ''
    var genreResult = ''
    var genres = []

    $.get(_url, function (data) {
        $.each(data, function(key, items){
            dataResult += "<div>"
                            +"<h3>" + items.name + "</h3>"
                            +"<h4>" + items.genre + "</h4>"
                        "</div>";
            
        })

        $('#movies').html(dataResult)
        
    })
})