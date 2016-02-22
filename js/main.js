var $ = require('jquery');


(function($){
  $(function(){

    var pageHeader = $('.header');

    pageHeader.css({'background-color': '#bbb'});

    $('.header')
      .find('h1').addClass('bold underline')
      .end()
      .css({'border': '5px solid red'})
      .find('h1').removeClass('bold');

    $('.album-tile').not('.first').css({'border': '5px solid #bbb'});

    jQuery('.album-tile').each(function(){
      var link = $(this);

      // console.log(this);
      // console.log(link);

      link.css({'text-align': 'center'});
    });

    /*
     * PHOTO ALBUM
     */

    $('.photo-album').hide();

    $('.album-tile').scroll(function(event){
      event.preventDefault();

      var title = $(this).find('div').text();
      var $newTitle = $('.photo-album h2');

      $newTitle.text(title);

      $('.photo-album').show();
      $('.photo-catalog').hide();

    });

  });

}(jQuery));
