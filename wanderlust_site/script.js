document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var links = document.querySelector(".nav-links");
      if (links.style.display === "flex") links.style.display = "";
      else links.style.display = "flex";
    });
  }
  var contactForm = document.querySelectorAll("#contactForm");
  contactForm.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("[name=name]").value;
      alert(
        "Thanks " +
          (name || "traveler") +
          " — message received! (Demo handler.)"
      );
      form.reset();
    });
  });
});
