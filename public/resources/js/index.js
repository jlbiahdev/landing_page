function initData() {
    var interval = setInterval(function() {
        var momentNow = moment();
        // var dayNow = momentNow.format('YYYY MMMM DD') + ' '
        //     + momentNow.format('dddd')
        //     .substring(0,3).toUpperCase();
        var dayNow = momentNow.format('DD');
        var monthNow = momentNow.format('MMMM');

        $('#pm-part').html(momentNow.format('A'));
        $('#month-part').html(monthNow);
        $('#date-part').html(dayNow);
        $('#day-part').html(momentNow.format('dddd'));
        $('#time-part').html(momentNow.format('hh:mm:ss'));
    }, 100);
}

function getImages() {
    fetch('https://api.unsplash.com/photos/random/?client_id=uls9o1DfcrvlU0dda3Ix9PbC8BzesqTWgtg0vKkKWrU&query=nature&orientation=landscape')
    .then((data) => {
        var output = data.text();

        console.log(output);
        return output;
    })
    .then(data => {
        var item = JSON.parse(data);
        console.log(item);

        if (!item)
        {
            console.log('../img/roxane.jpg');
        }
        else
        {
            var url = item.urls.full;
            var user = item.user.name;

            document.getElementById('header').style.backgroundImage=`url(${url})`
            console.log(item);
        }
    })
}

$(document).ready(() => {
        initData();
        getImages();
    }
);

console.log($(document).width());