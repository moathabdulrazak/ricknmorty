import { appState } from "../AppState.js";
import { Episode } from "../Models/Episode.js";
import { RnmApi } from "./AxiosService.js";






class EpisodesService {
  async getEpod() {
    const res = await RnmApi.get('/episode')
    console.log(res.data);
    appState.episoide = res.data.results.map(e => new Episode(e))
    console.log(appState.episoide);
  }
  async getEpPage() {
    const res2 = await RnmApi.get('/episode?page=2')
    appState.episoide = res2.data.results.map(e => new Episode(e))
  }
  async getEpPage2() {
    const res2 = await RnmApi.get('/episode?page=3')
    appState.episoide = res2.data.results.map(e => new Episode(e))
  }


}








export const episodesService = new EpisodesService();