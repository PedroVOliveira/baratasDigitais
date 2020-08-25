let {navbar,items,ulElement} = navbarLiElement;

ulElement.innerHTML = items.map((item,index) =>{
    return (
        `<li><a href="#">${item}</a></li>`
    )
}).join('');


