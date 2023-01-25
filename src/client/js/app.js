import * as Vue from "./vue.js";

Vue.createApp({
    data: () => {
        return {
            file: null,
            title: "",
            username: "",
            description: "",
            selectedImageId: null,
        };
    },
    methods: {
        handleClick(e) {
            console.log("Button clicked with event: ", e);
            this.anotherFunction();
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
    },
}).mount("#main");
