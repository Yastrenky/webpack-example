import elcucuy from './y';
// import Post from './services/api';
// import {get Comments} from './services/api'
 import Post,{getComments, getPosts} from './services/api'
var x = require('./x.js');
x();

var p = new elcucuy("biggie smalls");
p.greet();
getComments();
getPosts();
