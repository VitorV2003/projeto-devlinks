function toggleMode() {
  //document é a página inteira, o "documentElement" serve pra acessar um elemento da página, no caso a tag html
  const html = document.documentElement

  //função que muda o modo
  html.classList.toggle("light")

  //pega a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem avatar light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //sem light mode, adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
