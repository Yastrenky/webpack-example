export function getPosts(){
  console.log("This function get the posts");
}
export function getComments(){
  console.log("this function gets the Comments");
}
export default class Post{
  constructor(post, comments){
    this.post = post;
    this.comments = comments;
  }
  logPost(){
    console.log(this.post);
  }
}
