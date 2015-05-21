function emptySubmissionFields(group) {
    for (i=0; i < group.length; i++) {
        $(group[i]).val('');
    }
}

function submitAnnouncement() {
    var title = $('.announcement-title').val(),
        body = $('.announcement-body').val(),
        postList = $('.newsfeed'),
        newPost = $('<div>').addClass('post');

    newPost.append('<a href="#"><h2>'+ title +'</h2></a>');
    newPost.append("<small><p .class='post-date'>MM/DD/YYYY </p>Posted by: <p .class='post-submitter'>First Last</p></small>");
    newPost.append('<p>' + body + '</p>');
    postList.prepend(newPost);

    emptySubmissionFields(announcementGroup);

    $('.post-announcement').addClass('disabled');
}

function submitRefresher() {
    var title = $('.announcement-title').val();
    var body = $('.announcement-body').val();
    if (title.length > 0 && body.length > 0) {
        $('.post-announcement').removeClass('disabled');    
    }
}



function main() {

    announcementGroup = ['.announcement-body', '.announcement-title'];

    emptySubmissionFields(announcementGroup);
    // Makes sure the submit button is disabled when text fields are empty.
    $('.announcement-body, .announcement-title').keyup(submitRefresher);
    // Add the post to page and clear the text fields.
    $('.post-announcement').click(submitAnnouncement);
};

$(document).ready(main);