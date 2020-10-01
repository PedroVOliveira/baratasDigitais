# Projeto Hublife

Este projeto foi criado com html,css,javascript

# Primeiro Passo:
Para ter Acesso a esse projeto basta da um `git clone git@github.com:PedroVOliveira/baratasDigitais.git` no projeto.
# Segundo Passo:
## Instalando o Node (caso não tenha)
é necessário para o próximo passo ter o node instalado, caso você não tenha acesse [aqui](https://nodejs.org/en/) e baixe.
## Instalando o gulp Globalmente (Caso não tenha) 
é necessário ter instalado  gulp de forma global na sua maquina, caso não tenha acesse [aqui](https://gulpjs.com/docs/en/getting-started/quick-start) e faça a instalação.


Com o caminho acessado é necessário rodar o comando `npm install` para baixar as depências do projeto.

# Terceiro Passo: (Opcional)

Após as instalações das dependências do gulp é necessário modificar a url continda dentro do arquivo `gulpfile.js`.

No Arquivo `gulpfile.js` temos o seguinte trecho de código:

`
    function browser() {
    browserSync.init({
        server:{
            baseDir: "./"
        }
    })
}
`

Basta trocar a url do proxy, para a url onde você vai acessar o projeto


# O Projeto
![App UI](/baratasDigitais.png)








