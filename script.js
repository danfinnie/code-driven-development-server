$("#go").on("click", function(ev) {
  var code = $("#code").val();
  $("#test").load("/testify", { "code" : code });
  ev.preventDefault();
});
