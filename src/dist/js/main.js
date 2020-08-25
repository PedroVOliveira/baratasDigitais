
let navbarLiElement = {
    navbar:document.querySelector('header nav'),
    ulElement: document.querySelector('header nav .container ul'),
    items: ['Home','Recursos','A Baratas','Preços','Contato'],
}
let {navbar,items,ulElement} = navbarLiElement;

ulElement.innerHTML = items.map((item,index) =>{
    return (
        `<li><a href="#">${item}</a></li>`
    )
}).join('');


