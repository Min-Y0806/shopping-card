const sm_img = document.querySelectorAll(".img-nav li img");
const main_img = document.querySelector(".main-img img");




for (let i = 0; i < sm_img.length; i++) {
    sm_img[i].addEventListener("click", function imgchage(img) {
        main_img.src = this.src
    })
}