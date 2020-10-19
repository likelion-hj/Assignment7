/*jshint esversion: 6 */

var app = new Vue({
  el: "#Member",
  data: {
    users:[{
      id:"",
      commentText:""
    }],
    newCommentFrom:{
      id:"",
      commentText:""
    }
  },

  methods: {
    newData() {
      return{
        id:"",
        commentText:""
      }
    },
    createComment() {
          fetch("api/comments/create.php", {
            method:"POST",
            body: JSON.stringify(this.newCommentFrom),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.users = json;
            this.newCommentFrom = this.newData();
          });

          console.log("Creating (POSTing)...!");
          console.log(this.newCommentFrom);
        }
      },
  created() {
    fetch("api/comments/")
    .then( response => response.json() )
    .then( json => {
      this.users = json;
      console.log(json)}
    );
    this.newComment = this.newData();
  }
})
