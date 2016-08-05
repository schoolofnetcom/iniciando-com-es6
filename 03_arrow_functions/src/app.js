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

var color = () => console.log("red");
color();

var bob = {
    _name:"Bob",
    _friends: ["Guilherme","Camila","Murilo"],
    printFriends: function printFriends(){
        this._friends.forEach(f =>
            console.log(this._name + " knows "+ f));
    }
};

bob.printFriends();


