if (document.querySelectorAll(".glide").length) {
  let featuresSlider = new Glide(".glide", {
    type: "carousel",
    // type: "slider",
    // rewind: false,
    focusAt: "center",
    perView: 3,
  });

  featuresSlider.mount();
}
