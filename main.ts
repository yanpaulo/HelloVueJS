import Vue from "vue"

let vue = new Vue({
    el: "#app",
    data: {
        mensagem: "Hello, Vue!",
        nome: ""
    },
    methods: {
        clicado: function () {
            alert(`Olá ${this.nome}!`);
        }
    }
});