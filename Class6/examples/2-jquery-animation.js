$(document).ready(function() {
        $('#wat').click(function() {
                $(this).animate({top: 100}, 1000, function() {
                        alert('hi');
                });
        });
});
