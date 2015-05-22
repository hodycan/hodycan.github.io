/*
TODO:
- add submit survey functionality
... or maybe not and use google surveys?
*/

function emptySubmissionFields(submitGroup) {
    for (i=0; i < submitGroup.length; i++) {
        $(submitGroup[i]).val('');
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
    emptySubmissionFields(announcementFields);
    $('.post-announcement-btn').addClass('disabled');
}

function bindCheckAllowPosting(refreshGroup, button) {
    function checkAllowPosting() {
        for (i=0; i < refreshGroup.length; i++) {
            if ($(refreshGroup[i]).val().length < 1) {
                return;
            }
        }
    $(button).removeClass('disabled');
    }
    for (i=0; i < refreshGroup.length; i++) {
        $(refreshGroup[i]).keyup(checkAllowPosting)
    }

}

function main() {
    announcementFields = ['.announcement-body', '.announcement-title'];
    announcementRefreshFields = ['.announcement-body', '.announcement-title'];
    surveyFields = ['.survey-title', '.survey-choice']
    surveyRefreshFields = ['.survey-title', '.survey-choice:first-child']
    emptySubmissionFields(announcementFields);

    bindCheckAllowPosting(announcementRefreshFields, '.post-announcement-btn')
    $('.post-announcement-btn').click(submitAnnouncement);
    bindCheckAllowPosting(surveyRefreshFields, '.post-survey-btn');
};

$(document).ready(main);