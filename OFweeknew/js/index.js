
    var index = {
        // 初始化
        init: function() {
            this.bindEvents();
        },

        // 绑定事件
        bindEvents: function() {
            /*导航点击*//*
            $('.hot-search li').on('click', function(ev) {
                if ($(this).hasClass('li-active')) {
                    return
                } else {
                    $(this).addClass('li-active')
                    $(this).siblings().removeClass('li-active')
                }
               
            });*/
            /*关注和取消*/
            $('.focus-btn').on('click', function(ev) {

                var i=3;
                $('.m-school_content').show();
                t = setInterval(function(){
                    i--;
                    if(i==0){
                        resetForm();
                        return;
                    }
                },1000);
                if ($(this).hasClass('focus-active')) {
                    $('.m-school_content').html('您已经成功取消了该公众号的关注');
                    $(this).removeClass('focus-active')
                }else{
                    $(this).addClass('focus-active')
                    $('.m-school_content').html('您已经成功关注了该公众号');
                }
            });
            function resetForm(){
                clearInterval(t);
                $('.m-school_content').hide();
                lock=false;
            }
            /*搜索跳转*/
            $("#keyword").on('keypress',function(e) {  
                var keycode = e.keyCode;  
                var searchName = $(this).val();  
                if(keycode=='13') {  
                    e.preventDefault();    
                    location.href="search_result.html"
                      
                }  
            });  
            /*跳转至公众号*/
            $(".hot-recommand li img,h3,p").on('click',function(e) {  
                location.href="detail.html"
            });  

            /*isrcoll*/
            var myScroll,
                pullDownEl, pullDownOffset,
                pullUpEl, pullUpOffset,
                generatedCount = 0;
            /**
             * 下拉刷新 （自定义实现此方法）
             * myScroll.refresh();      // 数据加载完成后，调用界面更新方法
             */
            function pullDownAction() {
                location.reload();
            }
                

            function pullUpAction() {
                location.reload();
            }
                /**
                 * 初始化iScroll控件
                 */

            function loaded() {
                    pullDownEl = document.getElementById('pullDown');
                    pullDownOffset = pullDownEl.offsetHeight;
                    pullUpEl = document.getElementById('pullUp');
                    pullUpOffset = pullUpEl.offsetHeight;
                    myScroll = new iScroll('wrapper', {
                        scrollbarClass: 'myScrollbar',
                        /* 重要样式 */
                        useTransition: false,
                        /* 此属性不知用意，本人从true改为false */
                        topOffset: pullDownOffset,
                        onRefresh: function() {
                            if (pullDownEl.className.match('loading')) {
                                pullDownEl.className = '';
                                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                            } else if (pullUpEl.className.match('loading')) {
                                pullUpEl.className = '';
                                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                            }
                        },
                        onScrollMove: function() {
                            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                                pullDownEl.className = 'flip';
                                pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
                                this.minScrollY = 0;
                            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                                pullDownEl.className = '';
                                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                                this.minScrollY = -pullDownOffset;
                            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                                pullUpEl.className = 'flip';
                                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
                                this.maxScrollY = this.maxScrollY;
                            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                                pullUpEl.className = '';
                                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                                this.maxScrollY = pullUpOffset;
                            }
                        },
                        onScrollEnd: function() {
                            if (pullDownEl.className.match('flip')) {
                                pullDownEl.className = 'loading';
                                pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                                pullDownAction(); // Execute custom function (ajax call?)
                            } else if (pullUpEl.className.match('flip')) {
                                pullUpEl.className = 'loading';
                                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                                pullUpAction(); // Execute custom function (ajax call?)
                            }
                        }
                    });
                    setTimeout(function() {
                        document.getElementById('wrapper').style.left = '0';
                    }, 800);
                }
                //初始化绑定iScroll控件 
            document.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, false);
            document.addEventListener('DOMContentLoaded', loaded, false);
            
        }
    };
    index.init();







