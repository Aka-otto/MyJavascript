#author @Y4ngshu
#time   2015/3/13

//输出o的每个属性名称和值
function printprops (o) {
	for(var p in o)
		console.log(p + ": "+ o[p] + "\n");
}

//计算两个笛卡尔坐标(x1,y1)和(x2,y2)之间的距离
function distance(x1,y1,x2,y2){
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx*dx + dy*dy);
}
