// Ensure the DOM is fully loaded before running scripts
$(document).ready(function() {
  // Image Modal
  $('#imageModal').on('show.bs.modal', function(event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var title = button.data('title'); // Extract info from data-* attributes
      var text = button.data('text');
      var src = button.attr('src');
      var modal = $(this);
      modal.find('.modal-title').text(title);
      modal.find('.modal-body img').attr('src', src);
      modal.find('#imageModalText').text(text);
  });

  // Scroll to Top Button
  var topBtn = document.getElementById("topBtn");
  window.onscroll = function() {
      scrollFunction();
  };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          topBtn.style.display = "block";
      } else {
          topBtn.style.display = "none";
      }
  }

  topBtn.addEventListener('click', function() {
      topFunction();
  });

  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
});
