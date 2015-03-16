#author @y4ngshu
#time   2015/3/16

function dispalyInfo (args) {
	var output = "";
	if (typeof args.name == "string") {
		output += "Name: " + args.name +　"\n";
	};

	if (typeof args.age == "number") {
		output += "Age: " + args.age + "\n";
	};
	alert(output);
}

dispalyInfo({
	name："ZS",
	age: 29
});

dispalyInfo({
	name: "LX"
})
