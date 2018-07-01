// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height,width);
})

function makeGrid(x, y) {
    $('tr').remove();

    for (var i=1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table'+ i + '></tr>');
        for (var r=1; r <= y; r++) {
            $('#table' + i).append('<td></td>')
        }
    }
    // add color to the box
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
