$('ul.lp-tablist li').on('click', function () {
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
})

var asideTogglr = $('a#asidetogglr');
var sidemenu = $('#sidemenu');

asideTogglr.on('click', function () {
    sidemenu.toggleClass('collapsed');
})



// Date Range picker for dashboard
$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

//   Single date picker
  $(function() {
    $('input[name="delivery"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');
    //   alert("You are " + years + " years old!");
    });
  });