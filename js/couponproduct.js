/**
 * Created by Administrator on 2017/6/29.
 */
(function () {
    var cpn_duct_data = getHttpData(location.href);
    $(".cpn-pro-h2").html(cpn_duct_data.couponTitle);
    console.log("kuaikuai");
    console.log((cpn_duct_data.couponTitle).charAt());
    window.route.getcouponproduct(cpn_duct_data, function (info) {
        console.log(info);
        $(".cpn-duct-pro>ul").html(template("getcouponproduct", info));

        $(".cpn-duct-pro>ul").on("click","img", function () {
            $(".ul_fath>ul").html(template("moTaiBox", info));
        })
    })
    //获取元素
    //var li = $("")
})()




