/**
 * Created by Administrator on 2017/6/28.
 */

var ild_duct_data = getHttpData(location.href);

window.route.getdiscountproduct(ild_duct_data, function (info) {
    console.log(info);

    $(".ild-duct-info").html(template("getdiscountproduct", info));
})