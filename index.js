$(document).ready(function() {
  $(".slajder").click(function(e) {
    // hvata atribute
    var linkHref = $(this).attr("href");
    // console.log($(linkHref).offset().top);
    //skroluj do pozicije na stranici
    $("html, body").animate(
      {
        scrollTop: $(linkHref).offset().top
      },
      1000
    );
    // sprecava da se gore u nav baru pokaze #pa stranica
    e.preventDefault();
  });
});
