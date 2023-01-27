//import { modalComponents } from "./comments/comment";
export const modalComponent = {
    template: `
        <div class="modal">                                   //Here u display both image and description
            <p>Image summary</p>
            <img v-bind:src="image.url">
            <p>{{image.title}}</p>
            <p>{{image.description}}</p>
            <p>Created at {{image.created_at}}</p>
        </div>
    `,
    props: ["id"],
    emits: ["close"],
    data: () => {
        return {
            image: {},
            //imageId: "",
        };
    },
    methods: {
        handleChange: function (evt, index) {
            // this.$emit from Vue that you can use to emit/send out events
            this.$emit("citychanged", evt.target.value, index);
        },
        handleClose: function () {
            this.$emit("close");
        },
    },
    mounted() {
        fetch(`/image/${this.id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.image = data;
            });
    },
    /*components: {
        modal: modalComponents,
    },*/
};
