
var DateUtil = {
	init:function(date)
	{

		var yearSelect = $("#year");
		var monthSelect = $("#month");
		var daySelect = $("#day");


		var html = '';
		for(var i=1;i<=12;i++)
		{
			if(date && date.month==i)
			{
				html+='<option value='+i+' selected>'+i+'</option>';
			}else
			{
				html+='<option value='+i+'>'+i+'</option>';
			}
			
		}
		monthSelect.html(html);
		if(date)
		{
			var sel = yearSelect[0];
			for(var i=0;i<sel.options.length;i++)
			{
				if(sel.options[i].value==date.year)
				{
					sel.selectedIndex=i;
					break;
				}
			}
			this.changeMonth(date.year,date.month,date.day);
		}else
		{
			this.changeMonth(1985,1,1);
		}

	},
	changeYear:function(year)
	{
		var yearSelect = $("#year");
		var monthSelect = $("#month");
		var daySelect = $("#day");
		monthSelect[0].selectedIndex=0;
		var html='';
		for(var i=1;i<=31;i++)
		{
			html+='<option value='+i+'>'+i+'</option>';
		}
		daySelect.html(html);
	},
	changeMonth:function(year,month,day)
	{
		var yearSelect = $("#year");
		var monthSelect = $("#month");
		var daySelect = $("#day");
		
		var html = ''
		var month_day = this.days_month(year);
		for(var i=1;i<=month_day[month];i++)
		{
			if(day && day==i)
			{
				html+='<option value='+i+' selected>'+i+'</option>';
			}else
			{
				html+='<option value='+i+'>'+i+'</option>';
			}
		}
		daySelect.html(html);
	},
	days_month:function(year)
	{
		if(0 == year%4 && (year%100 !=0 || year%400 == 0))
		{
			var month_day = [0,31,29,31,30,31,30,31,31,30,31,30,31];
		}else
		{
			var month_day = [0,31,28,31,30,31,30,31,31,30,31,30,31];
		}
		return month_day;
	}
};

SettingUtil = {
	province: ["安徽","北京","重庆","福建","甘肃","广东","广西","贵州","海南","河北","黑龙江",
		  "河南","湖北","湖南","内蒙古","江苏","江西","吉林","辽宁","宁夏","青海","山西","山东","上海",
		  "四川","天津","西藏","新疆","云南","浙江","陕西","台湾","香港","澳门","海外","其他"],
	city:{"安徽":["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城"],
		     "北京": ["东城区","西城区","崇文区","宣武区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云县","延庆县"],
	         "重庆": ["万州区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","万盛区","双桥区","渝北区","巴南区","黔江区","长寿区","綦江县","潼南县","铜梁县","大足县","荣昌县","璧山县","梁平县","城口县","丰都县","垫江县","武隆县","忠县","开县","云阳县","奉节县","巫山县","巫溪县","石柱土家族自治县","秀山土家族苗族自治县","酉阳土家族苗族自治县","彭水苗族土家族自治县","江津区","合川区","永川区","南川区"],
			 "福建": ["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"],
			 "甘肃":["兰州","嘉峪关","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南","临夏","甘南"],
			 "广东":["广州","韶关","深圳","珠海","汕头","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"],
			 "广西":["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"],
			 "贵州":["贵阳","六盘水","遵义","安顺","铜仁","黔西南","毕节","黔东南","黔南"],
			  "海南":["海口","三亚","琼海市","文昌","万宁","东方市","其他"],
			  "河北":["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"],
			  "黑龙江":["哈尔滨","齐齐哈尔","鸡西","鹤岗","双鸭山","大庆","伊春","佳木斯","七台河","牡丹江","黑河","绥化","大兴安岭"],
			  "河南":["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店","济源"],
			  "湖北":["武汉","黄石","十堰","宜昌","襄阳","鄂州","荆门","孝感","荆州","黄冈","咸宁","随州","恩施土家族苗族自治州","仙桃","潜江","天门","神农架"],
			  "湖南":["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西土家族苗族自治州"],
			  "内蒙古":["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","兴安盟","锡林郭勒盟","乌兰察布盟","巴彦淖尔盟","阿拉善盟"],
			  "江苏":["南京","无锡","徐州","常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁"],
			  "江西":["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"],
			  "吉林":["长春","吉林","四平","辽源","通化","白山","松原","白城","延边朝鲜族自治州"],
			  "辽宁":["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"],
			  "宁夏":["银川","石嘴山","吴忠","固原","中卫"],
			  "青海":["西宁","海东","海北","黄南","海南","果洛","玉树","海西"],
			  "山西":["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"],
			  "山东":["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"],
			 "上海": ["黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","南汇区","奉贤区","崇明县"],
			 "四川": ["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝","甘孜","凉山"],
			  "天津":["和平区","河东区","河西区","南开区","河北区","红桥区","塘沽区","汉沽区","大港区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","宁河县","静海县","蓟县","滨海新区","保税区"],
			  "西藏":["拉萨","昌都","山南","日喀则","那曲","阿里","林芝"],
			  "新疆":["乌鲁木齐","克拉玛依","吐鲁番","哈密","昌吉","博尔塔拉","巴音郭楞","阿克苏","克孜勒苏","喀什","和田","伊犁","塔城","阿勒泰","石河子"],
			 "云南":["昆明","曲靖","玉溪","保山","昭通","楚雄","红河","文山","思茅","西双版纳","大理","德宏","丽江","怒江","迪庆","临沧"],
			 "浙江":["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"],
			  "陕西":["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"],
			  "台湾":["台北市","高雄市","基隆市","台中市","台南市","新竹市","嘉义市","台北县","宜兰县","桃园县","新竹县","苗栗县","台中县","彰化县","南投县","云林县","嘉义县","台南县","高雄县","屏东县","澎湖县","台东县","花莲县","其他"],
			  "香港":["中西区","东区","九龙城区","观塘区","南区","深水埗区","黄大仙区","湾仔区","油尖旺区","离岛区","葵青区","北区","西贡区","沙田区","屯门区","大埔区","荃湾区","元朗区","其他"],
			  "澳门":["花地玛堂区","圣安多尼堂区","大堂区","望德堂区","风顺堂区","氹仔","路环","其他"],
			  "海外":["美国","英国","法国","俄罗斯","加拿大","巴西","澳大利亚","印尼","泰国","马来西亚","新加坡","菲律宾","越南","印度","日本","新西兰","韩国","德国","意大利","爱尔兰","荷兰","瑞士","乌克兰","南非","芬兰","瑞典","奥地利","西班牙","比利时","挪威","丹麦","波兰","阿根廷","白俄罗斯","哥伦比亚","古巴","埃及","希腊","匈牙利","伊朗","蒙古","墨西哥","葡萄牙","沙特阿拉伯","土耳其"],
			  "其他":["其他"]
	},
	changeProvince:function(key,province,city)
	{

		if(this.city[province])
		{
			var html='';
			for(var i=0;i<this.city[province].length;i++)
			{
				if(city==this.city[province][i])
				{
					html+="<option value='"+this.city[province][i]+"' selected>"+this.city[province][i]+"</option>";
				}else
				{
					html+="<option value='"+this.city[province][i]+"'>"+this.city[province][i]+"</option>";
				}
			}
			$('#city'+key).html(html);
		}

		if(!province||province=='')
		{
			$('#city'+key).html("<option value=''>请选择</option>");
		}

	},
	initArea:function(key,province,city)
	{

		var html='<option value="">请选择</option>';
		
		for(var i=0;i<this.province.length;i++)
		{
			if(province==this.province[i])
			{
				html+="<option value='"+this.province[i]+"' selected>"+this.province[i]+"</option>";
			}else
			{
				html+="<option value='"+this.province[i]+"'>"+this.province[i]+"</option>";
			}
		}
		$('#province'+key).html(html);

		this.changeProvince(key,province,city);
	},

	
	savebase:function()
	{
		var province = $("#province").val();
		var city = $("#city").val();
		var sex = $("#sex")[0].checked?'男':'女';
		var realname = $("#realname").val();
		var year = $("#year").val();
		var month = $("#month").val();
		var day = $("#day").val();
		var personal_web = $("#web").val();
		var qq = $("#qq").val();
		var msn = $("#msn").val();
		var work = $("#work").val();
		var ask = $("#ask").val();
		var intro = $("#intro").val();
		var detail_intro = $("#detail_intro").val();
		var uid = $("#uid").val();
		
		$.ajax({
			type: 'POST',
			url: '/Setting/savebase/',
			dataType: 'json',
			cache:false,
			data: {
				'province':province,
				'city':city,
				'sex':sex,
				'realname':$.trim(realname),
				'birth_year':year,
				'birth_month':month,
				'birth_day':day,
				'personal_web':$.trim(personal_web),
				'qq':$.trim(qq),
				'msn':$.trim(msn),
				'work':$.trim(work),
				'ask':$.trim(ask),
				'intro':intro,
				'detail_intro':detail_intro
			},
			success: function(data){
				if(data.code=='succ')
				{
					MsgUtil.tip('succ',data.msg,$('.save')[0]);
				}else
				{
					alert('提交失败');
				}
			}
		});
		
		
	},

	/*checkDetailIntro:function()
	{
		var length = $("#detail_intro").val().length;
		if(length >=1000)
		{
			$("#notic").html("<em></em>输入超过1000个字");
			return false;
		}else
		{
			$("#notic").html("");
		}
	},*/

	setVisible:function(vis, obj) {
		that = this;
		that.obj =obj;
		vis = parseInt(vis);
		var url = '/setting/visible/';
		var visstr = $(obj).attr('vis')+'_'+vis;

		$.getJSON(url, {vis:visstr}, function(data) {

			if(data.succ == 1){
				that.visible(that.obj);
				$('#'+$(that.obj).attr('vis')+'_vis').html($(that.obj).html()+'<em></em>');
			} else {
				alert('设置失败!');
			}
		});
	
	},

	visible:function(obj) {
		$(obj).find('.f_list1').toggle();
	}
}
