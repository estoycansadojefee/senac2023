//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "10 November 2023 11:30:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 