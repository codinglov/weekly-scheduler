$(document).ready(function() {

    $('.saveBtn').on('click',function() {

      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');

      //saving in local storage by 

      localStorage.setItem(time,value);

      $('.notification').addClass('show');

      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });

    function hourUpdater() {

      var currentHour = moment().hours();

      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);


        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour===currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
 }

 hourUpdater();

  var interval = setInterval(hourUpdater, 15000);
    
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11.description').val(localStorage.getItem('hour-11'));
  $('#hour-12.description').val(localStorage.getItem('hour-12'));
  $('#hour-1.description').val(localStorage.getItem('hour-1'));
  $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  $('#hour-3.description').val(localStorage.getItem('hour-3'));
  $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));

  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
