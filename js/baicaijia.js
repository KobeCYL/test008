//标题头部进行渲染
(function () {

    var bai_data = {};
    bai_data.currentX = bai_data.currentX ||0;

    window.route.getbaicaijiatitle( function (info) {
        console.log(info);
        $(".bcj_nav>ul").html(template("getbaicaijiatitle",info));

        setBorderValue(".bcj_nav");
        //测试对象
        console.log("li",getele(".bcj_nav"));

        //touch开始事件函数;
        getele(".bcj_nav").addEventListener("touchstart", function (e) {
            bai_data.moveX = e.targetTouches[0].clientX;
            console.log("moveX",bai_data)
        })
        getele(".bcj_nav").addEventListener("touchmove", function (e) {
            bai_data.distanceX = e.targetTouches[0].clientX - bai_data.moveX;

            var x = bai_data.currentX+bai_data.distanceX;

            var Max_slideX =  bai_data.MaxLeft + 50,
                min_slideX = bai_data.MinLeft - 50;

            x = x >Max_slideX ?Max_slideX:x;

            x = x<min_slideX ?min_slideX:x;

            //ul添加过度效果
            var ul =  getele(".bcj_nav ul");

            removeTransition(ul);

            translateX(ul,x);

        })

        getele(".bcj_nav").addEventListener("touchend", function (e) {

            bai_data.currentX = bai_data.currentX + bai_data.distanceX;

            var x = bai_data.currentX;
            x = x > bai_data.MaxLeft ?bai_data.MaxLeft:x;
            x = x < bai_data.MinLeft ? bai_data.MinLeft :x;

            var ul =  getele(".bcj_nav ul");

            addTransition(ul);
            translateX(ul,x);
            bai_data.currentX =x;
            bai_data.moveX = 0;
            bai_data.distanceX = 0;
        })
    })

//如果对象里面title有值则为他本身,如果没有值,则默认为0;
//bai_data.titleid = bai_data.titleid == undefined?0:bai_data.titleid;
    bai_data.titleid = bai_data.titleid||0;

//标题产品内容进行渲染
    window.route.getbaicaijiaproduct(bai_data, function (info) {
        console.log(info);

        //渲染页面
        $(".bcj_pro>ul").html(template("getbaicaijiaproduct",info));
    })

//点击进行重新渲染事件;
    $(".bcj_nav").on("click","li", function () {

        //获取当期那li的titleid 的值;
        var bai_titleId = $(this).attr("titleid");
        bai_data.titleid =bai_titleId ;

        //标题产品内容进行渲染
        window.route.getbaicaijiaproduct(bai_data, function (info) {
            console.log(info);
            $(".bcj_pro>ul").html(template("getbaicaijiaproduct",info));
        })
        //点击当前项,给下面加个类名加下横横线
        $(this).find("a").addClass("red_border").end().siblings().find("a").removeClass("red_border");

        //动态移动框框.

        //先获取里面所需要的元素
        var ul_fath = $(".bcj_nav");
        var ul = ul_fath.find("ul");
        var lis = ul.find("li");

        //声明一些一会用到的变量;
        var ulWidth = 0;
        MaxLeft= 0,
            //声明一个数组,存储里面所有的li的宽度,省的以后每次都要获取一次了;
            lisWidthArr = [],
            //声明一个当前点击项前面的li的总宽度;
            currentWidth = 0,
            //声明一个变量存储在index里面;
            currentIndex  = bai_data.titleid;

        //给ulWidth修改为li的宽度之和,currentWidth的宽度为点击项之前li的所有宽度;
        lis.each(function (i,v) {
            ulWidth += $(v).width();
            lisWidthArr.push($(v).width());
            if(i<currentIndex){
                currentWidth -= $(v).width();
            }
            //console.log("v",$(v));
        })

        //测试数据
        console.log("ulWidth",ulWidth);

        //给ul设定被li填充的真实宽度
        ul.width(ulWidth);

        //因为ul的宽度如果在之前测试的话,是和父亲相等的,这次则会有很大的差距;
        var  MinLeft =ul_fath.width()-ul.width();

        console.log("ul.width()",ul.width());
        console.log("ul_fath.width()",ul_fath.width());
        console.log("currentWidth",currentWidth);


        //将一些重要的数据进行储存到对象当中;
        bai_data.MaxLeft = MaxLeft;
        bai_data.MinLeft = MinLeft;

        //给ul添加过度函数
        addTransition(ul[0]);

        //如果currentWidth位移的距离大于最小移动的宽度的时候,就让他等于最大的移动宽度
        //currentWidth =-currentWidth<MinLeft?MinLeft:currentWidth;

        currentWidth =currentWidth<MinLeft?MinLeft:currentWidth;

        console.log("currentWidth",currentWidth);

        //给ul添加移动样式;
        translateX(ul[0],currentWidth);

        //记录当前的ul当前的位移;
        bai_data.currentX = currentWidth;

        console.log("bai_data",bai_data);/**/

    })


//封装滑动的函数增加_过渡样式
    function addTransition(dom){
        dom.style.transition = "all 0.3s";
    }
    //移除过渡演示
    function removeTransition(dom){
        dom.style.transition = "null";
    }
    //横向位移距离
    function translateX(dom,translateX){
        dom.style.transform = "translateX("+translateX+"px)"
    }

    function setBorderValue(fath){
        //先获取里面所需要的元素
        var ul_fath = $(fath);
        var ul = ul_fath.find("ul");
        var lis = ul.find("li");

        //声明一些一会用到的变量;
        var ulWidth = 0;
        MaxLeft= 0,
            //声明一个数组,存储里面所有的li的宽度,省的以后每次都要获取一次了;
            lisWidthArr = [],
            //声明一个当前点击项前面的li的总宽度;
            currentWidth = 0,
            //声明一个变量存储在index里面;
            currentIndex  = bai_data.titleid;

        //给ulWidth修改为li的宽度之和,currentWidth的宽度为点击项之前li的所有宽度;
        lis.each(function (i,v) {
            ulWidth += $(v).width();
            lisWidthArr.push($(v).width());
            if(i<currentIndex){
                currentWidth -= $(v).width();
            }
            //console.log("v",$(v));
        })

        //测试数据
        console.log("ulWidth",ulWidth);

        //给ul设定被li填充的真实宽度
        ul.width(ulWidth);

        //因为ul的宽度如果在之前测试的话,是和父亲相等的,这次则会有很大的差距;
        var  MinLeft =ul_fath.width()+38-ul.width();

        console.log("ul.width()",ul.width());
        console.log("ul_fath.width()",ul_fath.width());
        console.log("currentWidth",currentWidth);

        //将一些重要的数据进行储存到对象当中;
        bai_data.MaxLeft = MaxLeft;
        bai_data.MinLeft = MinLeft;
        bai_data.ulWidth = ulWidth;
    }

})()
