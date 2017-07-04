/**
 * Created by Administrator on 2017/6/28.
 */
//渲染导航区



var bijiao_data = getHttpData(location.href)
console.log(bijiao_data)
//渲染标题
window.route.getcategorybyid(bijiao_data,function (info) {
    console.log(info);
    $(".bijia-nav").html(template("getcategorybyid_bijia",info));
})
//渲染标题最后一个标题
window.route.getproduct(bijiao_data,function (info) {
    var title = info.result[0].productName.split(" ")[0];
    $(".nav_title").html(title);

    //$(".bijia-nav").html(template("getcategorybyid_bijia",info));
})
//渲染页面pro
window.route.getproduct(bijiao_data,function (info) {
    console.log(info);
    $(".bijia_pro").html(template("getproduct_two",info));
    //$(".bijia-nav").html(template("getcategorybyid_bijia",info));
})
//渲染页面评论区
window.route.getproductcom(bijiao_data,function (info) {
    console.log("getproductcom")
    console.log(info);
    console.log(template("getproductcom",info));
    $(".container").html(template("getproductcom",info));
    //$(".bijia-nav").html(template("getcategorybyid_bijia",info));
})




