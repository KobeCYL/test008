/**
 * Created by Administrator on 2017/6/27.
 */

var pro_http = location.href;
console.log(pro_http);

var pro_data = getHttpData(location.href);
var pro_i =pageId = pro_data.pageid;
//console.log(Pro_categoryId,Pro_pageId);
//var pro_i = pageId;


//渲染标题元素
window.route.getcategorybyid(pro_data, function (info) {
    console.log(info);
    $(".byid-nav").html(template("getcategorybyid", info));
})
//渲染在内容元素
window.route.getProductList(pro_data, function (info) {

    console.log(info);

    $(".byid_pro>ul").html(template("getProductList", info));
})
//渲染按钮页面
var totalCount, pagesize, maxPage;
window.route.getProductList(pro_data, function (info) {
    console.log("info")
    console.log(info);
    totalCount = info.totalCount;
    pagesize = info.pagesize;
    pro_data.maxPage= maxPage = Math.ceil(totalCount / pagesize);
    var str = createChangePage(pro_data.maxPage,pro_i);
    $(".btn_area").html(str);
})

////调用创建换页字符串
//var str = createChangePage(pro_data.maxPage,pro_i);
//$(".btn_area").html(str);


//上一页点击的事件
$(".btn_area").on("click",".prve",function () {
    pro_i--
    if (pro_i < 1) {
        pro_i=1;
        return false;
    }
    window.route.getProductList(pro_data, function (info) {
        window.location.href = "productlist.html?categoryid=" +
            info.result[0].categoryId +
            "&pageid=" +
            pro_i;
    })
});
//select选项按钮点击的事件

$(".btn_area").on("change","#select",function () {
    pro_i = $(this).val();
    window.route.getProductList(pro_data, function (info) {
        window.location.href = "productlist.html?categoryid=" +
            info.result[0].categoryId +
            "&pageid=" +
            pro_i;
    })
})
//下一页按钮事件
$(".btn_area").on("click",".next",function (){
    pro_i++;
    if (pro_i > maxPage) {
        pro_i=maxPage;
        return false;
    }
    window.route.getProductList(pro_data, function (info) {
        $("option").eq(pro_i).prop("selected", true);
        window.location.href = "productlist.html?categoryid=" +
            info.result[0].categoryId +
            "&pageid=" +
            pro_i;
    })
})