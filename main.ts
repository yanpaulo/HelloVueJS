import Vue from "vue"

let vue = new Vue({
    el: "#app",
    data: {
        message: "Hello, Vue!",
        name: ""
    },
    methods: {
        buttonClicked: function () {
            alert(`Hello, ${this.name}!`);
        }
    }
});