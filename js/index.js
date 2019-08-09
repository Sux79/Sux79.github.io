(function(){
		layui.use('element', function(){
		  var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
		  //监听导航点击
		  element.on('nav(demo)', function(elem){
		//console.log(elem)
		    layer.msg(elem.text());
		  });
		});

//		$("").unbind("click").click(function(){
//          var address =$(this).attr("data-src");
//          $("iframe").attr("src",address);
//     });
		
}(window));

function txinfo(id){ 
	if('wechat'==id){
		layer.tips('手机号', $("#tx"), {
		  tips: [3, '#3595CC'],
		  time: 4000
		});
	}else if('qq'==id){
		layer.tips('qq做拉取', $("#tx"), {
		  tips: [3, '#3595CC'],
		  time: 4000
		});
	}else {
		layer.tips('微博名', $("#tx"), {
		  tips: [3, '#3595CC'],
		  time: 4000
		});
	}
}
