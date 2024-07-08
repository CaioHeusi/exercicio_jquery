$(document).ready(function() {
    // Quando o formulário for submetido
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Obtém o valor do campo de entrada
        var taskText = $('#task-input').val();

        // Cria um novo item da lista e adiciona à lista de tarefas
        $('#task-list').append('<li>' + taskText + '<button class="delete-button">X</button></li>');

        // Limpa o campo de entrada
        $('#task-input').val('');
    });

    // Mostra o botão de exclusão ao passar o mouse sobre o item da lista
    $('#task-list').on('mouseenter', 'li', function() {
        $(this).find('.delete-button').css('display', 'inline-block');
    });

    // Esconde o botão de exclusão ao retirar o mouse do item da lista
    $('#task-list').on('mouseleave', 'li', function() {
        $(this).find('.delete-button').css('display', 'none');
    });

    // Adiciona um evento de clique ao botão de exclusão para remover o item da lista
    $('#task-list').on('click', '.delete-button', function() {
        $(this).parent().remove();
    });

    // Adiciona um evento de clique aos itens da lista para alternar a classe 'completed'
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
