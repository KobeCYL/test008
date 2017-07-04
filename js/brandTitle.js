/**
 * Created by Administrator on 2017/6/29.
 */



var bra_data= getHttpData(location.href);
    if(bra_data.brandTitleid==undefined){
        window.route.getbrandtitle(function (info) {
            console.log(info);
            $(".getbrandtitle").html(template("getbrandtitle", info));
        })
    }else{
        window.route.getbrand(bra_data.brandTitleid,function (info) {
            console.log(info);
            $(".bra_pro_brand").html(template("getbrand", info));

            //下面是字符串拼接获取 动态的标题内容
            var title = info.result[0].brandName.split("").map(function (v,i) {
                if(i>=2){
                    return v;
                }
            }).join("");
            bra_data.title =title;
            $(".brand_title").html(title+"哪个牌子好");
        })

        //渲染销售数量的信息
        window.route.getbrandproductlist(bra_data.brandTitleid,function (info) {
            console.log(info);
            var productid
            try{
                productid= info.result[0].productId;
            }
            catch(e){
                productid=null;
            }
            console.log("productid");
            bra_data.productid=productid;
            console.log(productid);
            $(".bra_pro_saleNum").html(template("getbrandproductlist", info));
            $(".saleNum_title").html(bra_data.title+"产品销量排行");

            //获取里面的标题以及图片为评论所用
            var productName,productImg
            try{
                productName = info.result[0].productName||null;
                productImg = info.result[0].productImg||null;
            }
            catch(e){
                productName=null;
                productImg=null;
            }
            //var productName = info.result[0].productName ||null;
            //
            //var productImg = info.result[0].productImg ||null;
            //渲染产品的评论
            console.log(productid)
            window.route.getproductcom(productid,function (info) {
                console.log(info);
                $(".bra_pro_commont").html(template("getproductcom", info));
                $(".cmt_img").html(productImg);
                $(".cmt_p").html(productName);
                $(".commont_title").html(bra_data.title+"最新评论");
            })
        })
    }
//
//$(".getbrandtitle").on("click","li", function () {
//    $(".getbrandtitle").addClass("hide");
//    var brandTitleId = $(this).attr("brandTitleId");
//    console.log(brandTitleId)
//    // 渲染产品brand的信息
//    bra_data.brandTitleid = brandTitleId;
//    window.route.getbrand(bra_data.brandTitleid,function (info) {
//        console.log(info);
//        $(".bra_pro_brand").html(template("getbrand", info));
//        //console.log(info.result[0].brandName.split(""))
//        //console.log(info.result[0].brandName.split("").map(function (v,i) {
//        //    if(i>=2){
//        //        return v;
//        //    }
//        //}).join(""))
//        //下面是字符串拼接获取 动态的标题内容
//        var title = info.result[0].brandName.split("").map(function (v,i) {
//            if(i>=2){
//                return v;
//            }
//        }).join("");
//        bra_data.title =title;
//        $(".brand_title").html(title+"哪个牌子好");
//    })
//
//    //渲染销售数量的信息
//    window.route.getbrandproductlist(brandTitleId,function (info) {
//        console.log(info);
//        var productid = info.result[0].productId ||0;
//        console.log("productid");
//        bra_data.productid=productid;
//        console.log(productid);
//        $(".bra_pro_saleNum").html(template("getbrandproductlist", info));
//        $(".saleNum_title").html(bra_data.title+"产品销量排行");
//
//        //获取里面的标题以及图片为评论所用
//
//        var productName = info.result[0].productName ||null;
//
//        var productImg = info.result[0].productImg ||null;
//        //渲染产品的评论
//        console.log(productid)
//        window.route.getproductcom(productid,function (info) {
//            console.log(info);
//            $(".bra_pro_commont").html(template("getproductcom", info));
//            $(".cmt_img").html(productImg);
//            $(".cmt_p").html(productName);
//            $(".commont_title").html(bra_data.title+"最新评论");
//        })
//    })
//
//
//})
