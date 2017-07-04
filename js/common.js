///**
// * Created by Administrator on 2017/6/27.
// */
////渲染函数

function render(url, father, tmp, data) {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9999/api/" + url,
        data: data,
        dataType: "json",
        success: function (info) {
            console.table(info.result)
            $(father).html(template(tmp, info));
        }
    })
}

//获取http里面的数据
function getHttpData(http){
    var data = {};
    //console.log(http.split("?")[1].split("&"));
    //data.url = http.split("?")[1];

    var arr =  http.split("?")[1].split("&").map(function (v) {
        return v.split("=");
    })
    for( var i = 0 ; i < arr.length ; i ++){
        data[arr[i][0]] = arr[i][1]
    }
    console.log("data数据为下面");
    console.log(data);
    return data;
}
//动态生成三个按钮
function createChangePage(maxPage,pageId){
    pageId = pageId ||null;
    var str = "<button class='prve'>上一页</button><select id='select'>";
    for (var i = 1; i <= maxPage; i++) {
        if(pageId==i){
            str += "<option selected value='" + (i ) + "'>" + (i) + "/" + maxPage + "</option>"
        }else{
            str += "<option value='" + (i) + "'>" + (i ) + "/" + maxPage + "</option>";
        }
    }
    str+="</select><button class='next'>下一页</button>"
    console.log("createChangePage")
    console.log(str)
    return str;
}
$(".coment_b").html(parseInt($(".coment_b").html()))  ;

//获取原生元素的js文件

    function getId(id){
        return document.getElementById(id);
    }
    function getTagName(tagName){
        return document.getElementsByTagName(tagName);
    }
    function getClassName(className){
        return document.getElementsByClassName(className);
    }
    function getele(element){
        return document.querySelector(element);
    }
    function getEleAll(elements){
        return document.querySelectorAll(elements);
    }


