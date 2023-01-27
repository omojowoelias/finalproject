import * as Vue from "./vue.js";

Vue.createApp({
    data: () => {
        return {
            file: null,
            title: "",
            username: "",
            description: "",
            publisher: "",
        };
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();

            const formData = new FormData();
            formData.append("file", this.file);
            formData.append("title", this.title);
            formData.append("username", this.username);
            formData.append("publisher", this.publisher);
            formData.append("description", this.description);

            fetch("/books_w_publishers", {
                method: "POST",
                body: formData,
            });
        },

        onClick() {
            fetch("/api/addbooks", {
                method: "POST",
                body: formData,
            });
        },

        btnOn() {
            fetch("/books_w_publishers", {
                method: "POST",
                body: formData,
            });
        },
        handleFileChange(event) {
            this.file = event.target.file[0];
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
        fetch("/images")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log("data from server: ", data);
                this.images = data;
            });
    },
}).mount("#main");
