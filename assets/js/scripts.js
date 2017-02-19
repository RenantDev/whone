(function($) {

  'use strict';

  $('._linkCategoria').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('_activeCategoria');
    $('.btn-action > .btn').removeClass('_btnAlpha');
  });

})(jQuery);
