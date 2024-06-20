$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var title = button.data('title'); // Extract info from data-* attributes
    var text = button.data('text');
    var src = button.attr('src');
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body img').attr('src', src);
    modal.find('#imageModalText').text(text);
  });

  