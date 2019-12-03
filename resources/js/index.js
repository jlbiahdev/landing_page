$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        var dayNow = momentNow.format('YYYY MMMM DD') + ' '
            + momentNow.format('dddd')
            .substring(0,3).toUpperCase();

        $('#date-part').html(dayNow);
        $('#time-part').html(momentNow.format('A hh:mm:ss'));
    }, 100);
    
    document.getElementById("gsc-i-id1").placeholder = "What 're U looking for ?";
});