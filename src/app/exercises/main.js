"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(5, false);
component.onClick();
console.log("Component : likes = " + component.LikesCount + ", selected = " + component.IsSelected);
