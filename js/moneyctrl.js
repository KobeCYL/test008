/**
 * Created by Administrator on 2017/6/28.
 */

//渲染产品内容页面
var mon_data = getHttpData(location.href);
window.route.getmoneyctrl(mon_data, function (info) {
    console.log(info);
    $(".mon-pro>ul").html(template("getmoneyctrl", info));
})


//渲染按钮页面
var mon_totalCount, mon_pagesize, maxPage, mon_i = mon_data.pageid;
window.route.getmoneyctrl(mon_data, function (info) {
    mon_totalCount = info.totalCount;
    mon_pagesize = info.pagesize;
    maxPage = Math.ceil(mon_totalCount / mon_pagesize);
    //调用创建换页字符串
    var str = createChangePage(maxPage,mon_i);
    $(".mon_area").html(str);
})
//上一页点击的事件
$(".mon_area").on("click", ".prve", function () {
    mon_i--
    if (mon_i <= 1) {
        mon_i = 1
    }
    window.location.href = "moneyctrl.html?pageid=" +
        mon_i;
});
//select选项按钮点击的事件

$(".mon_area").on("change", "#select", function () {
    mon_i = $(this).val();
    window.location.href = "moneyctrl.html?pageid=" +
        mon_i;
})
//下一页按钮事件
$(".mon_area").on("click", ".next", function () {
    mon_i++;
    if (mon_i > maxPage) {
        mon_i = maxPage
    }
    window.location.href = "moneyctrl.html?pageid=" +
        mon_i;
})