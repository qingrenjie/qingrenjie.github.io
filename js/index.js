/**
 * Created by wcs on 2016/9/7.
 */
$(function(){
    $('#dowebok').fullpage({
        // 设置每一屏的颜色
        sectionsColor:['white', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        loopTop:true,
        // 滚动到某一屏后回调函数  index当前的页面的序号
        afterLoad:function(link,index){
            console.log(index);
            // 实现排他
            $('.section').removeClass('current');
            // 让当前屏动画执行延迟100ms
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100)

        }
    });
});

