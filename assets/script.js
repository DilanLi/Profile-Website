$(document).ready(function () {
    $("li > a").on("click", function(){
        $("li > a").attr("class","not-active");
        $(this).attr("class","active")
    })
})