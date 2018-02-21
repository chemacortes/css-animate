window.addEventListener("load", function() {
  document.querySelector('[name = "palette"]')
    .addEventListener("change",
      function() {
        document.body.setAttribute("data-palette", this.value)
      });
});
