$(function () {
  $.ajax({
    type: 'GET',

    url: 'http://updates.html5rocks.com',

    contentType: 'text/plain',

    success: function (res) {
      $('body').html(res);
    },

    error: function () {
      $('body').html('<span style="color:red">Error loading HTML5Rocks!</span>');
    }
  });
});