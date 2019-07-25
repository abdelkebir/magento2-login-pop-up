require(
       [
           'jquery',
           'Magento_Ui/js/modal/modal'
       ],
       function(
           $,
           modal
       ) {
          var options = {
             type: 'popup',
             responsive: true,
             innerScroll: true,
             class: 'login-popup',
             buttons: []
          };
          var popup = modal(options, $('#login-modal'));
          console.log('kkkkkkkkkkkkkkkkkkkkkk 44444');
          $( "#open-login-modal a" ).first().click(function( event ) {
              event.stopPropagation();
              // Do something
              $("#login-modal").modal("openModal");
          });
       }
   );
