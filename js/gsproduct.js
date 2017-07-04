/**
 * Created by Administrator on 2017/6/29.
 */

var gsp_shopid, gsp_areaid;

var gsp_data = {};
    gsp_data.shopid = gsp_shopid || 0;
    gsp_data.areaid = gsp_areaid || 0;
;
//渲染京东
window.route.getgsproduct(gsp_data, function (info) {
    console.log(info);
    $(".getgsproduct>ul").html(template("getgsproduct", info));
})

//点击第一个京东的下拉按钮事件
$(".gsp_shop").on("click", function () {
    //京东版块的下拉菜单渲染函数
    window.route.getgsshop(function (info) {
        console.log(info);
        $(".getgsshop>ul").html(template("getgsshop", info));

        //将之前点击的b标签的hide样式删除掉
        if(gsp_data.shopid !=undefined){
            $(".getgsshop li").eq(gsp_data.shopid).find("b").removeClass("hide");
        }

    })
    $(".getgsshop").toggleClass("hide");
})
//点击第一个华东的下拉按钮事件
$(".gsp_area").on("click", function () {
    //京东版块的下拉菜单渲染函数
    window.route.getgsshoparea(function (info) {
        console.log(info);
        $(".getgsshoparea>ul").html(template("getgsshoparea", info));

        //将之前点击的b标签的hide样式删除掉
        if(gsp_data.areaid !=undefined) {
            $(".getgsshoparea li").eq(gsp_data.areaid).find("b").removeClass("hide");
        }
    })
    $(".getgsshoparea").toggleClass("hide");
})

//点击全部价格下拉按钮事件
$(".gsp_price").on("click", function () {
    //京东版块的下拉菜单渲染函数
    $(".getgs_sprice").slideToggle();
})

//点击动态渲染的京东. 一号店的按钮
$(".getgsshop").on("click", "li", function () {
    gsp_shopid = $(this).attr("shopId");
    gsp_data.shopid = gsp_shopid || 0;

    window.route.getgsproduct(gsp_data, function (info) {
        console.log(info);
        $(".getgsproduct>ul").html(template("getgsproduct", info));
    })
    //$(this).find("b").removeClass("hide").end().siblings().find("b").addClass("hide");

    $(".getgsshop").toggleClass("hide");
    console.log("gsp_data",gsp_data);

})

//点击动态渲染的华北地区里面的任意按钮
$(".getgsshoparea").on("click", "li", function () {

    gsp_areaid = $(this).attr("areaId");
    gsp_data.areaid = gsp_areaid || 0;
    window.route.getgsproduct(gsp_data, function (info) {
        console.log(info);
        $(".getgsproduct>ul").html(template("getgsproduct", info));
    })
    //$(this).find("b").removeClass("hide").end().siblings().find("b").addClass("hide");

    $(".getgsshoparea").toggleClass("hide");

    console.log("gsp_data",gsp_data);
})




