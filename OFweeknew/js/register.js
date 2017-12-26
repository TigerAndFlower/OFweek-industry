
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
            /*表单验证*/
			$("#phone").blur(function(){
				var val = $(this).val();
				var phoneRep = /^1[3-9]\d{9}$/;
				if(val == ""){
					$(this).next().html("请输入手机号码").show();
					return ;
				};
				if(!phoneRep.test(val)){
					$(this).next().html("手机格式错误").show();
					return ;
				};
				$.post(url,data,callback,function(){
					if(){
						$("#phone").next().html("手机号码已存在").show();
					};
				});
			});
            $('#form input,#form select').focus(function(){
				$(this).next().hide();
			});
            $('.next-step').on('click', function(ev) {
                var phone = $('#phone').val();
				var verify = $('#verify').val();
				var trade = $('#trade').val();
				var position = $('#position').val();
               	var nickName = $('#nickName').val();
               	var phoneRep = /^1[3-9]\d{9}$/;
               	if(phone==''){
				$('#phone').next().html('请输入手机号码').show();
				return;
				}
				if(!phoneRep.test(phone)){
					$('#phone').next().html('手机格式错误').show();
					return;
				}
				if(verify == ''){
					$('.verify-tips').html('请输入验证码').show();
					return;
				}
				if(trade == ''){
					$('#trade').next().html('请选择行业').show();
					return;
				}
				if(position == ''){
					$('#position').next().html('请选择职位').show();
					return;
				}
				if(nickName == ''){
					$('#nickName').next().html('请选输入昵称').show();
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
				$('#form select option:first-child').prop('selected','selected');
				lock=false;
			}
        },

    };
    register.init();






