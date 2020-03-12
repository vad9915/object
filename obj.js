var city1 = {
    "name": "ГородN",
    "population": "10000000",
    "getName": function (name){
        console.log(name)
    },
    "exportStr": function(){
        for (var key in city1){
            if (key == "name" || key == "population"){
                console.log(key + " = " + this[key])
            }
        }
    }
};

var city2 = {
    "name": "ГородM",
    "population": 10**6,
    "getName": function (name){
        console.log(name)
    },
    "exportStr": function(){
        for (var key in city2){
            if (key == "name" || key == "population"){
                console.log(key + " = " + this[key])
            }
        }
    }
};


city1.getName(city1.name)
city1.exportStr()

city2.getName(city2.name)
city2.exportStr()