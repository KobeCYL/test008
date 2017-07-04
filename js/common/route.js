/**
 * Created by Administrator on 2017/6/27.
 */
(function () {

    var route = {
        baseUrl: "http://127.0.0.1:9999/api/",
        getcategorybyid: getcategorybyid,
        getProductList: getProductList,
        getproduct: getproduct,
        getproductcom: getproductcom,
        getmoneyctrl:getmoneyctrl,
        getmoneyctrlproduct:getmoneyctrlproduct,
        getinlanddiscount:getinlanddiscount,
        getdiscountproduct:getdiscountproduct,
        getbaicaijiatitle:getbaicaijiatitle,
        getbaicaijiaproduct:getbaicaijiaproduct,

        getcoupon:getcoupon,
        getcouponproduct:getcouponproduct,
        getgsshop:getgsshop,
        getgsshoparea:getgsshoparea,
        getgsproduct:getgsproduct,
        getsitenav:getsitenav,
        getbrandtitle:getbrandtitle,
        getbrand:getbrand,
        getbrandproductlist:getbrandproductlist,
        getproductcom:getproductcom,
    }

    function getcategorybyid(data, callback) {
        var url = route.baseUrl + "getcategorybyid";
        $.get(url, data, function (res) {
            callback(res);
        });
    };

    function getProductList(data, callback) {
        var url = route.baseUrl + "getproductlist";
        $.get(url, data, function (res) {
            callback(res);
        })
    }

    function getproduct(data, callback) {
        var url = route.baseUrl + "getproduct";
        $.get(url, data, function (res) {
            callback(res);
        })
    }

    function getproductcom(data, callback) {
        var url = route.baseUrl + "getproductcom";
        $.get(url, data, function (res) {
            callback(res);
        })
    }
    function getmoneyctrl(data, callback) {
        var url = route.baseUrl + "getmoneyctrl";
        $.get(url, data, function (res) {
            callback(res);
        })
    }
    //获取国内折扣moneyproduct.html的页面的数据函数;
    function getmoneyctrlproduct(data, callback) {
        var url = route.baseUrl + "getmoneyctrlproduct";
        $.get(url, data, function (res) {
            callback(res);
        })
    }
    //获取国内折扣的二级页面数据函数
    function getinlanddiscount( callback) {
        var url = route.baseUrl + "getinlanddiscount";
        $.get(url, function (res) {
            callback(res);
        })
    }
    //获取国内折扣moneyproduct.html的页面的数据函数;
    function getdiscountproduct(data, callback) {
        var url = route.baseUrl + "getdiscountproduct";
        $.get(url, data, function (res) {
            callback(res);
        })
    }
    //白菜价
    function getbaicaijiatitle(callback) {
        var url = route.baseUrl + "getbaicaijiatitle";
        $.get(url, function (res) {
            callback(res);
        })
    }
    //白菜产品数据渲染
    //
    function getbaicaijiaproduct(data, callback) {
        var url = route.baseUrl + "getbaicaijiaproduct";
        $.get(url, data, function (res) {
            callback(res);
        })
    }





    //优惠劵
    function getcoupon(callback) {
        var url = route.baseUrl + "getcoupon";
        $.get(url, function (res) {
            callback(res);
        })
    }

    //获取优惠劵coupon.html的页面的数据函数;
    function getcouponproduct(data, callback) {
        var url = route.baseUrl + "getcouponproduct";
        $.get(url, data, function (res) {
            callback(res);
        })
    }
    //凑单京东-----下拉数据函数
    function getgsshop(callback) {
        var url = route.baseUrl + "getgsshop";
        $.get(url, function (res) {
            callback(res);
        })
    }
    //凑单地区-----下拉数据函数
    function getgsshoparea(callback) {
        var url = route.baseUrl + "getgsshoparea";
        $.get(url, function (res) {
            callback(res);
        })
    }
    //凑单网页的产品渲染函数;
    function getgsproduct(data, callback) {
        var url = route.baseUrl + "getgsproduct";
        $.get(url, data, function (res) {
            callback(res);
        })
    }

    //商场导航的产品数据函数   getsitenav
    function getsitenav(callback) {
        var url = route.baseUrl + "getsitenav";
        $.get(url, function (res) {
            callback(res);
        })
    }
    //品牌大全二级页面   getbrandtitle
    function getbrandtitle(callback) {
        var url = route.baseUrl + "getbrandtitle";
        $.get(url, function (res) {
            callback(res);
        })
    }
    //品牌大全二级页面产品函数渲染数据;
    function getbrand(brandTitleId, callback) {
        var url = route.baseUrl + "getbrand";
        $.get(url, {brandtitleid:brandTitleId}, function (res) {
            callback(res);
        })
    }
    //品牌大全二级页面产品销售信息函数渲染数据;
    function getbrandproductlist(brandTitleId, callback) {
        var url = route.baseUrl + "getbrandproductlist";
        $.get(url, {brandtitleid:brandTitleId,pagesize:4}, function (res) {
            callback(res);
        })
    }
    //品牌大全二级页面产品评论渲染数据;
    function getproductcom(productid, callback) {
        var url = route.baseUrl + "getproductcom?productid="+productid;
        $.get(url,function (res) {
            callback(res);
        })
    }
    window.route = route;
})
()