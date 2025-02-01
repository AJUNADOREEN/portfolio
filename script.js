
  function toggleReadMore(button) {
    const moreText = button.previousElementSibling.querySelector(".more");
    const dots = button.previousElementSibling.querySelector(".dots");

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      dots.style.display = "none";
      button.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
      button.innerHTML = "Read More";
    }
  }
