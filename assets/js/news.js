// js for news card



var getUrl = function() {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=75GRRh7XLtAhPrsJjB6vbIP3gjCKKSGV")
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            
            var titleLis = document.createElement('ul')
            
            for (var i = 0; i < data.results.length; i++) {
                urlObj = data.results[i].short_url
                titleObj = data.results[i].title
                
                var modalEl = document.getElementById("newsModalContent");
                var listContent = document.createElement('li')
                var anchorEl = document.createElement('a')
                    anchorEl.setAttribute("href", urlObj)
                    anchorEl.setAttribute("target", "_blank")
                    anchorEl.textContent = titleObj
                
                listContent.appendChild(anchorEl)
                titleLis.appendChild(listContent)
                modalEl.appendChild(titleLis)
            }
           
        })
}

$("#newsBtn").click(function() {
    // open modal
    $("#newsModal").addClass("active");
    getUrl();
});

$(".close-btn").click(function() {
    
    $("#newsModal").clear();

});

