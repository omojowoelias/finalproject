const showBookComponent = {
    template: `
    <div  class="showbooks">
        <h2>Information about book</h2>
        <img v-bind:src="book.url">
        <h3>{{book.url}}</h3>
        <p>{{book.title}}</p>
        <p>{{book.description}}</p>
    </div>
    `,
    //props: ["id"],
    data: () => {
        return {
            book: {},
        };
    },
    methods: {
        showDetailsBookModal(id) {
            this.showDetailsBookModal = id;
        },
    },
    props: ["id"],
};
export { showBookComponent };

// getAllbooks: function () {
//     var app = this;
//     axios
//         .get("/books")
//         .then((data) => {
//             console.log("show books", books);
//         })
//         .catch((error) => {
//             console.log("Books not found", error);
//         });
// },
