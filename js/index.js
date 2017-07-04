/**
 * Created by Administrator on 2017/6/26.
 */
//通过ajax获取数据
$(function () {

    render("getindexmenu", ".menu", "tmp_nav")


    render("getmoneyctrl", ".idx-suggest", "tmp_money");
    console.log($(".menu"))
        //更多选项点击事件

        $("section.menu").on("load", "li:nth-child(8)", function () {
            console.log("sdhi")
            $(this).nextAll().toggleClass("hide");
        })

    $("section.menu").on("click", "li:nth-child(8)", function () {
        var li_4 = $(this).nextAll()
        li_4.toggleClass("show");
        console.log(li_4)

    });
})
