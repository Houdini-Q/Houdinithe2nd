$('li').on('mouseover', () => {
  $('li').addClass('highlighted');
})
$('li').on('mouseleave', () => {
  $('li').removeClass('highlighted');
})
