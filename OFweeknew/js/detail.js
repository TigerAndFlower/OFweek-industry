
    var index = {
        // 初始化
        init: function() {
            this.bindEvens();
        },

        // 绑定事件
        bindEvens: function() {
            $('.back-logo').on('click', function(ev) {
                history.back()
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

        },

    };
    index.init();






