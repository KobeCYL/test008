/**
 * Created by Administrator on 2017/6/28.
 */

var mon_duct_data = getHttpData(location.href);
window.route.getmoneyctrlproduct(mon_duct_data, function (info) {
    console.log(info);
    $(".info").html(template("getmoneyctrlproduct", info));
})
