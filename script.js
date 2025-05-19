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