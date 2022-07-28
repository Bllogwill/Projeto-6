const pathContainerSectionOne = './containers/section-one/index.html'
const containerSectionOne = document.getElementById('container-section-one')

async function onLoadBody() {
  containerSectionOne.innerHTML = await (
    await fetch(pathContainerSectionOne)
  ).text()
}

function scrollToServices() {
  containerSectionOne.scrollIntoView({
    behavior: 'smooth'
  })
}
