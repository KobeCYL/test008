/**
 * Created by Administrator on 2017/6/28.
 */
window.route.getinlanddiscount( function (info) {
    console.log(info);
    $(".getinlanddiscount>ul").html(template("getinlanddiscount", info));
})