
    var personalCenter = {
        // 初始化
        init: function() {
            this.bindEvens();
        },

        // 绑定事件
        bindEvens: function() {
            $('.back-logo').on('click', function(ev) {
                history.back()
            });
            $('.center-nav li').on('click', function(ev) {
                var liIndex = $(this).index()
                // 点击变高亮
                $(this).addClass('active');
                $('.center-main-tab').eq(liIndex).css('display','block');
                $(this).siblings().removeClass('active');
                $('.center-main-tab').eq(liIndex).siblings().css('display','none');
            });
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
            /*跳转至搜索文章页*/
            $('.gotoSearch span').on('click', function(ev) {
                location.href="search_article.html"
            });
            /*跳转至首页*/
            $('.gotoHome span').on('click', function(ev) {
                location.href="index.html"
            });
            /*跳转至文章详情页*/
            $('.comment-title').on('click', function(ev) {
                location.href="article.html"
            });

            /*打开回复框*/
            $('.comment-article').on('click', function(ev) {
                $('.reply_content').show();
            });
        },

    };
    personalCenter.init();





