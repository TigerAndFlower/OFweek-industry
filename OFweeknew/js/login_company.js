
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
            $('#form input').focus(function(){
				$(this).next().hide();
			});
            $('.login-btn').on('click', function(ev) {
                var name = $('#name').val();
				var password = $('#password').val();
               	var phoneRep = /^1[3-9]\d{9}$/;
               	var email = /^[A-Za-z0-9-_\.]+\@([A-Za-z0-9-_]+\.)+[A-Za-z0-9]{2,6}$/;
               	if(name==''){
					$('#name').next().html('请输入用户名').show();
					return;
				}
				if(!phoneRep.test(name) && !emial.test(name)){
					$('#name').next().html('用户名格式错误').show();
					return;
				}
				if(password==''){
					$('#password').next().html('请输入密码').show();
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
					loction.href = 'index.html'
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






