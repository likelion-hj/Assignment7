/*jshint esversion: 6 */

var app = new Vue({
  el: "#Member",
  data: {
    users:[{
      id:"",
      commentText:""
    }],
    newComment:{
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
          fetch("api/comments/post.php", {
            method:"POST",
            body: JSON.stringify(this.newComment),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Accept": "application/json"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.users.push(json[0]);
            this.newComment = this.newData();
          });

          console.log("Creating (POSTing)...!");
          console.log(this.newComment);
        }
      },
  created() {
    fetch("api/comments/")
    .then( response => response.json() )
    .then( json => {
      this.users = json;
      console.log(this.users)}
    );
    this.newComment = this.newData();
  }
})
