let {navbar,items,ulElement,ids} = navbarLiElement;

ulElement.innerHTML = items.map((item,index) =>{
    return (
        `<li><a href="${ids[index]}">${item}</a></li>`
    )
}).join('');


