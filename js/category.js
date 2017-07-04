/**
 * Created by Administrator on 2017/6/27.
 */


render("getcategorytitle", ".cate_nav_ul", "getcate_nav_temp");

var titleId = null;
$(".cate_nav_ul").on("click", "li.cate_nav_ul_li", function () {
    //console.log($(this))
    titleId = +($(this).attr("titleId"));

    console.log(typeof titleId)
    var data = {
        titleid: titleId
    }
    var thisDiv = $(this).find(".nav_li_div");
    console.log(thisDiv)
    thisDiv.toggleClass("hide");
    render("getcategory", thisDiv, "getcate_nav_li_div_temp", data)

})

