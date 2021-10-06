// js for music card
function getTopTracks(artist) {
    fetch("https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=3cc896d1dbfc0a29acc1818a8098ad61&format=json&autocorrect=1&limit=10")
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                $('#musicLeftBtn').show();
                $("#musicFormGrp").hide();
                var songOrderedList = document.createElement("ol");
                $('.text-error').remove();

                for (var i = 0; i < data.toptracks.track.length; i++) {
                    var songItem = document.createElement("li");
                    var songName = document.createElement("a");
                    $(songName).attr("href", data.toptracks.track[i].url);
                    $(songName).attr("target", "_blank");
                    $(songName).text(data.toptracks.track[i].name);
                    $(songItem).append(songName);
                    $(songOrderedList).append(songItem);
                    $("#songList").append(songOrderedList);
                }
            } else {
                $(errorMsgEl).text(data.message);
                $(errorMsgEl).addClass("text-error");
                $("#musicFormGrp").append(errorMsgEl);
            }
        });
};

var errorMsgEl = document.createElement("p");

$("#musicBtn").click(function () {
    $("#musicModal").addClass("active");
    $("#musicLeftBtn").hide();
});


$("#musicFormBtn").click(function () {
    var artistName = $("#searchArtistname").val();
    getTopTracks(artistName);
});

$("#musicLeftBtn").click(function () {
    $('#musicLeftBtn').hide();
    $("#musicFormGrp").show();
    $("ol").hide();
});