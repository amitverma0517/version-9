const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  });

  function myFunction() {
    var element = document.body;
    element.classList.toggle("move");
  }