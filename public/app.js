import { HomePage } from "./components/HomePage.js";
import { API } from "./services/API.js";
import './components/AnimatedLoading.js'
import './components/YouTubeEmbed.js'
import { MovieDetailsPage } from "./components/MovieDetailsPage.js";

window.addEventListener("DOMContentLoaded", event => {
    // document.querySelector("main").appendChild(new HomePage())
    document.querySelector("main").appendChild(new MovieDetailsPage())
});

window.app = {
    search: (event) => {
        event.preventDefault();
        const q = document.querySelector("input[type=search]").value;
        // TODO
    },
    api: API
}