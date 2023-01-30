const addBookModal = {
    template: `
    <div class="addbooks">
        <form v-on:submit="handleSubmit" class="addbooks">
                 <h2>Add Books</h2>
                <div>
                    <span>Title: </span><input type="text" name="title" v-model="title"><br>
                    <span>Publisher_ID: </span><input type="text" name="publisher_id" v-model="publisher_id"><br>
                    <span>DESCRIPTION: </span><input type="text" name="description" v-model="description">
                    <span>Upload File: </span><input class="btn" type="file" name="filename" accept="image/*" v-on:change="handleFileChange">
                    <button class="onClick">Submit</button>
                </div>
                <div>
                </div>
            </form>
    </div>
    `,
    data: () => {
        return {
            file: null,
            title: "",
            description: "",
            publisher_id: "",
        };
    },
    methods: {
        handleFileChange: function (evt) {
            this.file = evt.target.files[0];
        },
        handleSubmit: function (evt) {
            console.log(evt);
            console.log("clicked");
            evt.preventDefault();
            const formData = new FormData();
            console.log("Title: ", this.title);
            formData.append("file", this.file);
            formData.append("title", this.title);
            formData.append("publisher_id", this.publisher_id);
            formData.append("description", this.description);
            fetch(`/addbooks`, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
        },

        mounted() {
            console.log("in modalComponent");

            // fetch books from database
            // fetch(`/books/${this.id}`)
            //     .then((res) => res.json())
            //     .then((data) => {
            //         console.log(data);
            //     });
        },
    },
};

export { addBookModal };
