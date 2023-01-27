import * as Vue from "./vue.js";
import { modalComponents } from "./modal/addbooks/addbooks.js";
import { modalComponent } from "../modal/showbooks";

Vue.createApp({
    components: {
        "modal-component": modalComponents,
    },
    data: () => {
        return {
            file: null,
            title: "",
            username: "",
            description: "",
            publishe_id: "",
            search: "",
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
        btnOn() {
            fetch("/addbooks", {
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
        // mounted() {
        //     console.log("Vue app was mounted");
        //     fetch("/images")
        //         .then((res) => {
        //             return res.json();
        //         })
        //         .then((data) => {
        //             console.log("data from server: ", data);
        //             this.images = data;
        //         });
    },
}).mount("#main");
