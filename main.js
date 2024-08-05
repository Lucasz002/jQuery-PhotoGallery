$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#buttonToCancel').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const addressImageNewJS = $('#addressImageNew').val();
        const NewItem = $('<li style="display: none"></li>');
        $(`<img src="${addressImageNewJS}" />`).appendTo(NewItem);
        $(`
            <div class="overlayImageLink">
                <a href="${addressImageNewJS}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(NewItem);
        $(NewItem).appendTo('ul');
        $(NewItem).fadeIn(1000);
        $('#addressImageNew').val('');
    });
});