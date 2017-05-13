    // 百度地图API功能

    //创建地图
    var map = new BMap.Map("dituContent");
    var point = new BMap.Point(116.547236,39.906900);
    map.centerAndZoom(point, 17);

    // 创建标注
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

    //创建信息框
    var opts = {
      width : 200,     // 信息窗口宽度
      height: 70,     // 信息窗口高度
      title : "极客学院" , // 信息窗口标题
      enableMessage:true,//设置允许信息窗发送短息
      message:"120天脱产学习挑战年薪20万，报名火热进行中！"
    }
    var infoWindow = new BMap.InfoWindow("地址：北京市朝阳区高碑店1703号爱家臻品宫二层", opts);  // 创建信息窗口对象 
    marker.addEventListener("click", function(){          
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    });