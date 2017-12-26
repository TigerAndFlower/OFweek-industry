
    var setPassword = {
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
    		/*重新发送*/
    		$('.resend-btn').on('click', function(ev) {
                $('.setInerval-btn').show();
    			$('.resend-btn').hide();
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
            });
            /*表单验证*/
            $('#form input').focus(function(){
				$(this).next().hide();
			});
            $('.login-btn').on('click', function(ev) {
                var verify = $('#verify').val();
				var password = $('#password').val();
               	var passwordRep = /^(?=[\w\W])[^*]{6,20}$/;
               	if(verify==''){
					$('.verify-tips').html('请输入验证码').show();
					return;
				}
				if(password==''){
					$('#password').next().html('请输入密码').show();
					return;
				}
				if(!passwordRep.test(password)){
					$('#password').next().html('密码格式错误').show();
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
					loction.href = 'login_personal.html'
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
    setPassword.init();






