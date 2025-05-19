let categories = document.querySelectorAll(".category__item");
for(let i=0; i<categories.length; i++){
    categories[i].addEventListener('click', function(){
        let category_name = this.dataset.name;
        document.querySelector(".category__item_active").classList.remove("category__item_active");
        this.classList.add("category__item_active");
        document.querySelector(".products__shelf_active").classList.remove("products__shelf_active");
        document.querySelector(".products__shelf[data-name='" + category_name + "']").classList.add("products__shelf_active");
    });
}

let burger_menu = document.querySelector(".burger-menu");
burger_menu.addEventListener("click", function(){
    this.classList.add("visibility-hidden");
    document.querySelector(".drop-down-list").classList.remove("visibility-hidden");
    document.querySelector("body").classList.add("block_scroll");
});

let menu_close = document.querySelector(".menu-close");
let drop_down_list_blackout = document.querySelector(".drop-down-list__blackout");
let close_function = function(){
    document.querySelector(".drop-down-list").classList.add("visibility-hidden");
    document.querySelector(".burger-menu").classList.remove("visibility-hidden");
    document.querySelector("body").classList.remove("block_scroll");

};
menu_close.addEventListener("click", close_function);
drop_down_list_blackout.addEventListener("click", close_function);
