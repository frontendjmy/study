$(".form-select")
  .eq(0)
  .on("input", function (e) {
    var value = e.currentTarget.value;

    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
    }
  });
