// export const modalComponents = {
//     template: `
//         <div class="comments">
//             <p>Create comments here</p>
//             <form v-on:submit="handleComments" class="Comment">
//                      <h2>Write a Comment</h2>
//                     <div>
//                         //<span>Username: </span><input type="text" name="username" v-model="username">
//                          <span>Comments: </span><input type="text" name="comment" v-model="comment">
//                          <button v-bind:class="btnOn">Submit</button>
//                     </div>
//                 </form>
//                 <p v-for="comment in comments">
//                  {{comment.username}}</p>

//             </p>
//         </div>
//     `,
//     props: ["id"],
//     data: () => {
//         return {
//             comments: [],
//             username: "",
//             comment: "",
//         };
//     },
//     methods: {
//         handleSubmit: function (evt) {
//             evt.preventDefault();
//             // fetch with POST with comment data
//             fetch(`/comment`, {
//                 method: "POST",
//                 body: JSON.stringify({
//                     username: this.username,
//                     comment: this.comment,
//                     image_id: this.id,
//                 }),
//             })
//                 .then((res) => res.json())
//                 .then((data) => {
//                     console.log(data);
//                 });
//         },
//         mounted() {
//             // fetch comments from database and set it to comments array/not calling the func?
//             fetch(`/comments/${this.id}`)
//                 .then((res) => res.json())
//                 .then((data) => {
//                     console.log(data);
//                 });
//         },
//     },
// };
