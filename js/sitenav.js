/**
 * Created by Administrator on 2017/6/29.
 */
window.route.getsitenav(function (info) {
    console.log(info);
    $(".getsitenav>ul").html(template("getsitenav", info));
})
