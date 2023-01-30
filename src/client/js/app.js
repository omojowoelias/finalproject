import * as Vue from "./vue.js";
import { addBookModal } from "./modal/addbooks/addbooks.js";
import { showBookComponent } from "./modal/showbooks.js";
// import { addBookModal } from "./modal/showbooks";

Vue.createApp({
    components: {
        "add-book-modal": addBookModal,
        "show-book-modal": showBookComponent,
    },
    data: () => {
        return {
            file: null,
            title: "",
            url: "",
            username: "",
            description: "",
            author: "",
            publisher: "",
            publishe_id: "",
            search: "",
            books: [],
            showAddBookModal: false,
            showBookComponent: false,
            showDetailsBookModal: null,
        };
    },
    methods: {
        handleSubmit(event) {
            console.log(event);
            console.log("clicked");
            event.preventDefault();

            // const formData = new FormData();
            // formData.append("file", this.file);
            // formData.append("title", this.title);
            // formData.append("username", this.username);
            // formData.append("publisher", this.publisher);
            // formData.append("description", this.description);

            // fetch("/addbooks", {
            //     method: "POST",
            //     body: formData,
            // });
        },
        handleAddModal() {
            this.showAddBookModal = true;
        },
        openModal(book) {
            console.log(book);
            // do something here with selected book
            this.selectedBook = true;
            this.showDetailsBookModal = true;
        },
        btnOn() {
            const formData = new FormData();
            //formData.append();
            formData.append("file", this.file);
            formData.append("title", this.title);
            formData.append("publisher_id", this.publiser_id);
            formData.append("description", this.description);

            fetch("/addbooks", {
                method: "POST",
                body: formData,
            });
        },
        // onClick() {
        //     const formData = newFormData();
        //     formData.append("");
        // },
        handleFileChange(event) {
            this.file = event.target.file[0];
        },
        showDetailsBookModal(id) {
            this.showDetailsBookModal = id;
        },
    },

    updated() {
        // updated is executed when a variable from data is used in html and has changed
        console.log("Vue app was updated");
    },
    created() {
        console.log("Vue app was created");
    },
    mounted() {
        console.log("Vue app was mounted");
        fetch("/imagebook")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log("data from server: ", data);
                this.books = data.data;
            });
    },
}).mount("#main");
