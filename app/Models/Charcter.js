





export class Charcter {
  constructor(data) {
    this.name = data.name
    this.gender = data.gender
    this.image = data.image
    this.species = data.species
    this.satus = data.status
    this.url = data.url
    this.type = data.type || ''
  }




  get CharcterTemplate() {
    return `
    <div class="card font text-light color-shift col-2 d-flex m-5">
    <h3 class="text-center">${this.name}</h3>
    <h3 class="text-center">${this.gender}</h3>
    <img class="img-fluid" src="${this.image}" alt="">
    <h4 class="text-center">${this.satus}</h4>
    <h4 class="text-center">${this.species}</h4>
    <h6>${this.type}</h6>
  </div>
    `
  }
}