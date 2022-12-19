"use strict";
// TypeScript - Enums
//enum - group of constants
//number 
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 100] = "East";
    Direction[Direction["West"] = 101] = "West";
    Direction[Direction["South"] = 102] = "South";
    Direction[Direction["North"] = 103] = "North";
})(Direction || (Direction = {}));
console.log(Direction.South);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
//string
var Direction1;
(function (Direction1) {
    Direction1["East"] = "East";
    Direction1["West"] = "West";
    Direction1["South"] = "South";
    Direction1["North"] = "North";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.South);
