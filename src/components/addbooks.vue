<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Image Board</title>
        <script
            defer
            src="./js/app.js"
            type="module"
            crossorigin="use-credentials"
        ></script>
    </head>
    <body>
        <div id="main">
            <div class="gallery"></div>
            <form v-on:submit="handleSubmit" class="form">
                <h2>Publisher Latest upload</h2>
                <div>
                    <span>SEARCH:</span
                    ><input type="text" name="search" v-model="search" /><br />
                    <span>PUBLISHER: </span
                    ><input
                        type="text"
                        name="username"
                        v-model="username"
                    /><br />
                    <span>AUTHOR: </span
                    ><input type="text" name="title" v-model="title" /><br />
                    <span>DESCRIPTION: </span
                    ><input
                        type="text"
                        name="description"
                        v-model="description"
                    />
                </div>
                <div>
                    <span>File: </span
                    ><input
                        v-bind:class="btn"
                        type="file"
                        name="filename"
                        accept="image/*"
                        v-on:change="handleFileChange"
                    />
                </div>
            </form>
        </div>
    </body>
</html>
