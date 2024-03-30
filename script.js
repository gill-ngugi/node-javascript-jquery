$(document).ready(function () {
    // Show description on icon click
    $('.imageA').click(function () {
        var description = $(this).data('description');
        $('#description').text(description);
    });

    // Submit form
    $('#contactForm').submit(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        alert(name + ', we have received your message. Thank you for reaching out to us.');

        // Clear form fields
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    });
});