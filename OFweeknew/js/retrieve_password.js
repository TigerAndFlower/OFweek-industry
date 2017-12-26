
    var register = {
        // 初始化
        init: function() {
            this.bindEvens();
        },

        // 绑定事件
        bindEvens: function() {
        	$('.back-logo').on('click', function(ev) {
                history.back()
            });
            /*进页面倒计时*/
        	$('.setInerval-btn span').html(5);
        	var i = 5;
    		t = setInterval(function(){
    			i--;
    			$('.setInerval-btn span').html(i);
    			if (i == 0) {
    				clearInterval(t);
    				$('.setInerval-btn').hide();
    				$('.resend-btn').show();
    			}
    		},1000)
    		/*重新加载图片*/
    		$('.verify-img').on('click',function(){
    			$('.verify-img').attr('src','images/chknumber.asp?'+Math.random());
    		});
            /*表单验证*/
            $('#form input').focus(function(){
				$(this).next().hide();
			});
            $('.login-btn').on('click', function(ev) {
                var phone = $('#phone').val();
				var verify = $('#verify').val();
               	var phoneRep = /^1[3-9]\d{9}$/;
               	if(phone==''){
					$('#phone').next().html('请输入手机号').show();
					return;
				}
				if(!phoneRep.test(phone)){
					$('#phone').next().html('手机格式错误').show();
					return;
				}
				if(verify==''){
					$('.verify-tips').html('请输入验证码').show();
					return;
				}
				lock = true;
				//提交
				var url="";
				var data=$('#form').serialize();
				$.post(url,data,callback,'json');
            });
            
			function callback(res){
				if(res.status == 1){
					loction.href = 'set_password.html'
				}
				else{
					$('#phone').next().html('您的手机已经注册！').show();
					lock= false;
				}
			}
			function resetForm(){
				$('#form input').each(function(){
					$(this).val('');
				});
				lock=false;
			}
        },

    };
    register.init();






