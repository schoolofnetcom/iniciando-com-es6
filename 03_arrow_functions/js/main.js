"use strict";

/*
var bob = {
    _name:"Bob",
    _friends: ["Guilherme","Camila","Murilo"],
    printFriends: function printFriends(){
        var self = this;
        this._friends.forEach(function(f){
            return console.log(self._name + " knows " + f);
        });
    }
};

bob.printFriends();

*/

var color = function color() {
    return console.log("red");
};
color();

var bob = {
    _name: "Bob",
    _friends: ["Guilherme", "Camila", "Murilo"],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};

bob.printFriends();
