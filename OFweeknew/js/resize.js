/**
 * Created by 77 on 2016/1/22.
 */
//控制字体
        // 根据不同分辨率设置html基准字体大小
        // 1rem == 20px
        (function () {
            //var sw = window.screen.width;
            var sw = document.documentElement.clientWidth;
            console.log(sw);
            var root = document.documentElement;
            root.style.fontSize = sw / 375 * 1.25 * 100 + '%';
        })();
       
// 如果浏览器不支持addEventListener，则中止


