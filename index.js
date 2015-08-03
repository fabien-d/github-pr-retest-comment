const comment = 'jenkins retest';

var textbox = document.getElementById( 'new_comment_field' );

if ( textbox ) {

    textbox.value = comment;

    let btn = document.querySelector( '#partial-new-comment-form-actions > .btn.btn-primary' );

    if ( btn ) {
        btn.click();
    }
}
