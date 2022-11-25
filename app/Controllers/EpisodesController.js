import { appState } from "../AppState.js";
import { episodesService } from "../Services/EpisodesService.js";
import { setHTML } from "../Utils/Writer.js";



function drawEp() {
  let template = ''
  appState.episoide.forEach(e => template += e.EpTemplate)
  setHTML('episode', template)
}
export class EpisodesController {
  constructor() {
    this.getEpod()
    // appState.on('episoide', drawEp)
    // this.showEp()
  }
  async getEpod() {
    await episodesService.getEpod()
  }

  showEp() {
    drawEp()
  }

  async getEpPage() {
    await episodesService.getEpPage()
    console.log('showin');
    drawEp()
  }

  async getEpPage2() {
    await episodesService.getEpPage2()
    console.log('showin');
    drawEp()
  }
}