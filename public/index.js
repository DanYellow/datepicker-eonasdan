$(function () {
    $('#datetimepicker1, #datetimepicker2, #datetimepicker3, #datetimepicker4').datetimepicker({
      locale: 'fr',
      useCurrent: false
    })

    $('#datetimepicker1, #datetimepicker2, #datetimepicker3, #datetimepicker4').trigger('dp.change');

    // Quand je change le premier datepicker, 
    // la date minimale du second datepicker ne peut être qu'égale ou supérieure 
    // à la date du premier datepicker
    $("#datetimepicker1").on("dp.change", function (e) {
      console.log("vbfbebe")
      $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
    });
    // Quand je change le second datepicker, 
    // la date maximale du premier datepicker ne peut être qu'égale ou inférieure 
    // à la date du second datepicker
    $("#datetimepicker2").on("dp.change", function (e) {
      $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
      $('#datetimepicker3').data("DateTimePicker").minDate(e.date);
    });

    $("#datetimepicker3").on("dp.change", function (e) {
      $('#datetimepicker4').data("DateTimePicker").minDate(e.date);
    });

    $("#datetimepicker4").on("dp.change", function (e) {
      $('#datetimepicker3').data("DateTimePicker").maxDate(e.date);
    });
});
