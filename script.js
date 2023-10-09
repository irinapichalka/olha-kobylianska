if (document.querySelectorAll(".glide").length) {
  let featuresSlider = new Glide(".glide", {
    type: "carousel",
    // type: "slider",
    // rewind: false,
    focusAt: "center",
    perView: 2,
    peek: {
      before: 150,
      after: 150,
    },
  });

  featuresSlider.mount();
}
