







export class Episode {
  constructor(data) {
    this.air_date = data.air_date
    this.created = data.created
    this.episode = data.episode
    this.name = data.name
    this.url = data.url
  }



  get EpTemplate() {
    return `
    <div class="col-2 d-flex card m-5 color-shift text-light shadow">
 
    <h4>${this.air_date}</h4>
    <h4>${this.name}</h4>
    <h3>${this.episode}</h3>
</div>
    `
  }
}