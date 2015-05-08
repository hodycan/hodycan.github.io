function emptySubmissionFields() {
    $('.submit-body').val('');
    $('.submit-title').val('');
};

function submitPost() {
    var title = $('.submit-title').val(),
        body = $('.submit-body').val(),
        postList = $('.post-list'),
        newPost = $('<li>').addClass('post');

    newPost.append('<a href="#"><h2>'+ title +'</h2></a>');
    newPost.append("<small><p .class='post-date'>MM/DD/YYYY </p>Posted by: <p .class='post-submitter'>First Last</p></small>");
    newPost.append('<p>' + body + '</p>');
    postList.prepend(newPost);

    emptySubmissionFields();

    $('.submit-button').addClass('disabled');
}

function submitRefresher() {
    var title = $('.submit-title').val();
    var body = $('.submit-body').val();
    if (title.length > 0 && body.length > 0) {
        $('.submit-button').removeClass('disabled');    
    }
}

function main() {

    emptySubmissionFields();

    // Add the post to page and clear the text fields.
    $('.submit-button').click(submitPost);

    // Makes sure the submit button is disabled when text fields are empty.
    $('.submit-body, .submit-title').keyup(submitRefresher);
};

$(document).ready(main);