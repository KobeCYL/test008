/**
 * Created by Administrator on 2017/6/29.
 */

window.route.getcoupon(function (info) {
    console.log(info);
    $(".cpn_nav>ul").html(template("getcoupon", info));
})
