;(function ( $, window, document, undefined ) {

	"use strict";

  function ajaxFormSubmit(e)
  {
    e.preventDefault();
    var formObj = $(this),
        formId = $(this).attr('id'),
        formURL = formObj.attr("action"),
        formData = new FormData(this);

    if (!formId) {
      throw "Ajax-enabled .ajax-submit-form form should have id parameter assigned. Aborting submit.";
    }

    $.ajax({
      url: formURL,
      type: 'POST',
      data:  formData,
      mimeType:"multipart/form-data",
      contentType: false,
      cache: false,
      processData: false,
      success: function(data, textStatus, jqXHR) {
        formObj.replaceWith($(data).filter('#' + formId)[0]);
      },
      error: function(jqXHR, textStatus, errorThrown) {}
    });
  }

  $(document).on('submit', 'form.ajax-submit-form', ajaxFormSubmit);

  // Header scroll.
  $('[data-header-scroll]').css('cursor', 'pointer');
  $(document).on('click', '[data-header-scroll]', function () {
    $('html, body').animate({scrollTop: $(this).offset().top + 80}, 'slow');
  })

})( jQuery, window, document );

