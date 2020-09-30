const featuresElement = document.querySelectorAll('.feature-content a[href^="#"');
const featureContent = document.querySelectorAll('.div-feature-content-tab');
featuresElement.forEach((item,index,arr)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        //seleciona todos os titulos da feature (responsividade,mobile,suporte)
        arr.forEach((item,index) =>{
            //remove a classe active
            item.classList.remove('active');
            //retira o destaque do item 
            item.parentElement.classList.remove('active');
            
        });
        //adiciona a classe active no pai do elemento, (adiciona o destaque do texto);
        item.parentElement.classList.add('active');
        //adiciona classe no item clicado
        item.classList.add('active');
        //verifica se qual elemento tem a classe active e retira
        featureContent.forEach((item,index,arr) =>{
            arr[index].classList.remove('active');
        });
        //adiciona a classe no elemento clicado
        featureContent[index].classList.add('active');
        

    });
})

