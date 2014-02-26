$("#go").on("click", function(ev) {
  var code = $("#code").val();
  $("#test").load("/testify", { "code" : code });
  ev.preventDefault();
});

$("#use-example").on("click", function(ev) {
  $("#code").val("class Bunker < ActiveRecord::Base \n\
  validate :password, secure: true \n\
  validate :location, :protected => true \n\
  \n\
  def alert_staff \n\
    staph.all_alert \n\
    Staff.alert_all \n\
  end \n\
  \n\
  def alert_president \n\
    SecretService.stand_down \n\
    alert_staff || go_crazy \n\
  end \n\
end");
  $("#go").click();
  ev.preventDefault();
});
