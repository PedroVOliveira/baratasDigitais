let {navbar,items,ulElement} = navbarLiElement;

ulElement.innerHTML = items.map((item,index) =>{
    return (
        `<li><a href="${items[index]}">${item}</a></li>`
    )
}).join('');


