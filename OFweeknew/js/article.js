
    var article = {
        // 初始化
        init: function() {
            this.bindEvents();
        },

        // 绑定事件
        bindEvents: function() {
            /*顶部悬浮消失*/
            $('.article-top-03').on('click', function(ev) {
                $('.top_content').hide()
            })
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
            /*收藏和取消*/
            $('.collect-btn').on('click', function(ev) {

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
                    $('.m-school_content').html('您已经成功取消了该公众号的收藏');
                    $(this).removeClass('focus-active')
                }else{
                    $(this).addClass('focus-active')
                    $('.m-school_content').html('您已经成功收藏了该公众号');
                }
            });
            /*跳转至公众号*/
            $(".comment-list li img").on('click',function(e) {  
                location.href="detail.html"
            });  

            
        }
    };
    article.init();







