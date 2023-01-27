import { AlexaForBusiness } from "aws-sdk";

const modalComponent = {
    template: `
    <div  class="showbooks">
                 <h2>List Of Books</h2>
                 <img v-bind:src="books.url">
                 <p>{{books.title}}</p>
                 <p>{{books.description}}</p>
               
    </div>
    `,
    //props: ["id"],
    data: () => {
        return {
            books: [],
        };
    },
    methods: {},
    mounted() {
        fetch(`/imagebook`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.books = data;
            });
    },
};
export { modalComponent };

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
