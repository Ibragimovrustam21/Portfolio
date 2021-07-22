new WOW().init();
$(function () {
    $(".send").click(function () {
        let login = $("#input-name").val().length;
        let phone = $("#input-phone").val().length;
        let email = $("#input-email").val().length;
        let write = $("#write").val().length;
        if (login !== 0 && phone !== 0 && email !== 0 && write !== 0) {
            return;
        }
        else if (login == 0 && phone == 0 && email == 0 && write == 0) {
            $(".login").html("Loginni kiriting")
            $(".phone").html("Telefon raqamni kiriting")
            $(".email").html("Emailni kiriting")
            $(".murojat").html("Xabarni yozing")
            return;
        }
        if (login == 0) {
            $(".login").html("Loginni kiriting")
        }
        if (phone == 0) {
            $(".phone").html("Telefon raqamni kiriting")
        }
        if (email == 0) {
            $(".email").html("Emailni kiriting")
        }
        if (write == 0) {
            $(".murojat").html("Murojatni kiriting")
        }
    })
})