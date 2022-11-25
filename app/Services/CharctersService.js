import { appState } from "../AppState.js";
import { Charcter } from "../Models/Charcter.js";
import { RnmApi } from "./AxiosService.js";





class CharctersService {
  async getPage2() {
    const res2 = await RnmApi.get('/character?page=3')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage3() {
    const res2 = await RnmApi.get('/character?page=4')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage4() {
    const res2 = await RnmApi.get('/character?page=5')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage5() {
    const res2 = await RnmApi.get('/character?page=6')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage6() {
    const res2 = await RnmApi.get('/character?page=7')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage7() {
    const res2 = await RnmApi.get('/character?page=8')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage8() {
    const res2 = await RnmApi.get('/character?page=9')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage9() {
    const res2 = await RnmApi.get('/character?page=10')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage10() {
    const res2 = await RnmApi.get('/character?page=11')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage11() {
    const res2 = await RnmApi.get('/character?page=12')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage12() {
    const res2 = await RnmApi.get('/character?page=13')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage13() {
    const res2 = await RnmApi.get('/character?page=14')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage14() {
    const res2 = await RnmApi.get('/character?page=15')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage15() {
    const res2 = await RnmApi.get('/character?page=16')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage16() {
    const res2 = await RnmApi.get('/character?page=17')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage17() {
    const res2 = await RnmApi.get('/character?page=18')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage18() {
    const res2 = await RnmApi.get('/character?page=19')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage19() {
    const res2 = await RnmApi.get('/character?page=20')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage20() {
    const res2 = await RnmApi.get('/character?page=21')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage21() {
    const res2 = await RnmApi.get('/character?page=22')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage22() {
    const res2 = await RnmApi.get('/character?page=23')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage23() {
    const res2 = await RnmApi.get('/character?page=24')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage24() {
    const res2 = await RnmApi.get('/character?page=25')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage25() {
    const res2 = await RnmApi.get('/character?page=26')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage26() {
    const res2 = await RnmApi.get('/character?page=27')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage27() {
    const res2 = await RnmApi.get('/character?page=28')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage28() {
    const res2 = await RnmApi.get('/character?page=29')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage29() {
    const res2 = await RnmApi.get('/character?page=30')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage30() {
    const res2 = await RnmApi.get('/character?page=31')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage31() {
    const res2 = await RnmApi.get('/character?page=32')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage32() {
    const res2 = await RnmApi.get('/character?page=33')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage33() {
    const res2 = await RnmApi.get('/character?page=34')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage34() {
    const res2 = await RnmApi.get('/character?page=35')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage35() {
    const res2 = await RnmApi.get('/character?page=36')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage36() {
    const res2 = await RnmApi.get('/character?page=37')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage37() {
    const res2 = await RnmApi.get('/character?page=38')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage38() {
    const res2 = await RnmApi.get('/character?page=39')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage39() {
    const res2 = await RnmApi.get('/character?page=40')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage40() {
    const res2 = await RnmApi.get('/character?page41')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }
  async getPage41() {
    const res2 = await RnmApi.get('/character?page=42')
    appState.charcters = res2.data.results.map(y => new Charcter(y))
  }



  async getPage() {
    const res1 = await RnmApi.get('/character?page=2')
    appState.charcters = res1.data.results.map(c => new Charcter(c))
  }
  async getCharcters() {
    const res = await RnmApi.get('/character')
    // const res1 = await RnmApi.get('/character?page=2')
    // const res2 = await RnmApi.get('/character?page=3')
    console.log('charcter', res.data);
    appState.charcters = res.data.results.map(t => new Charcter(t))


  }

}














export const charctersService = new CharctersService();