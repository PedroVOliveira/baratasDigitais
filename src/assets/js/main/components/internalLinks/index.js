function internalLinks(){
    const dynamicMenu = document.querySelector('.js li a');
    
    const internalLinks = document.querySelectorAll('.js a[href^="#"');
        function scrollToSection(event){
         event.preventDefault();
         //Pega o endereço da section
         //usando o getAtribute pega o endereço sem o o localhost
         const href = event.currentTarget.getAttribute('href');   
         const section = document.querySelector(href);
         //Indica a quantidade de pixel do topo da section
         const top = section.offsetTop - 100 ;
         //  top: com o variavel no topo
         // behavior: faz o scroll suave; (a opção auto vai diretamenta para a página)
         window.scrollTo({
             top:top,
             behavior: 'smooth'
         })
        }
        internalLinks.forEach((link)=>{
            link.addEventListener('click',scrollToSection);
        })
        
}

internalLinks();
