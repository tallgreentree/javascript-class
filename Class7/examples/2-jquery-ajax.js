var getInfo = function (event) {
        $.ajax({
                url: 'text.xml',
                dataType: 'xml',
                success: function (data) {
                        var text = $(data).find('text');
                        $('#thelink').html(text.text());
                }
        });
        event.preventDefault();
};

$(document).ready(function () {
        $('#thelink').click(getInfo);
});
