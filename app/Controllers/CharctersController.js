import { appState } from "../AppState.js";
import { charctersService } from "../Services/CharctersService.js";
import { setHTML } from "../Utils/Writer.js";


function nextPage() {

}

function drawCharcter() {
  let template = ''
  appState.charcters.forEach(c => template += c.CharcterTemplate)
  setHTML('charcter', template)
}
export class CharctersController {
  constructor() {
    this.getCharcters()
    appState.on("charcters", drawCharcter)
    // this.showCharcters()
  }

  showCharcters() {
    drawCharcter()
  }

  async getCharcters() {
    await charctersService.getCharcters()
  }

  async getPage() {
    await charctersService.getPage()
  }
  async getPage2() {
    await charctersService.getPage2()
  }
  async getPage3() {
    await charctersService.getPage3()
  }
  async getPage4() {
    await charctersService.getPage4()
  }
  async getPage5() {
    await charctersService.getPage5()
  }
  async getPage6() {
    await charctersService.getPage6()
  }
  async getPage7() {
    await charctersService.getPage7()
  }
  async getPage8() {
    await charctersService.getPage8()
  }
  async getPage9() {
    await charctersService.getPage9()
  }
  async getPage10() {
    await charctersService.getPage10()
  }
  async getPage11() {
    await charctersService.getPage11()
  }
  async getPage12() {
    await charctersService.getPage12()
  }
  async getPage13() {
    await charctersService.getPage13()
  }
  async getPage14() {
    await charctersService.getPage14()
  }
  async getPage15() {
    await charctersService.getPage15()
  }
  async getPage16() {
    await charctersService.getPage16()
  }
  async getPage17() {
    await charctersService.getPage17()
  }
  async getPage18() {
    await charctersService.getPage18()
  }
  async getPage19() {
    await charctersService.getPage19()
  }
  async getPage20() {
    await charctersService.getPage20()
  }
  async getPage21() {
    await charctersService.getPage21()
  }
  async getPage22() {
    await charctersService.getPage22()
  }
  async getPage23() {
    await charctersService.getPage23()
  }
  async getPage24() {
    await charctersService.getPage24()
  }
  async getPage25() {
    await charctersService.getPage25()
  }
  async getPage26() {
    await charctersService.getPage26()
  }
  async getPage27() {
    await charctersService.getPage3()
  }
  async getPage28() {
    await charctersService.getPage28()
  }
  async getPage29() {
    await charctersService.getPage29()
  }
  async getPage30() {
    await charctersService.getPage30()
  }
  async getPage31() {
    await charctersService.getPage31()
  }
  async getPage32() {
    await charctersService.getPage32()
  }
  async getPage33() {
    await charctersService.getPage33()
  }
  async getPage34() {
    await charctersService.getPage34()
  }
  async getPage35() {
    await charctersService.getPage35()
  }
  async getPage36() {
    await charctersService.getPage36()
  }
  async getPage37() {
    await charctersService.getPage37()
  }
  async getPage38() {
    await charctersService.getPage38()
  }
  async getPage39() {
    await charctersService.getPage39()
  }
  async getPage40() {
    await charctersService.getPage40()
  }
  async getPage41() {
    await charctersService.getPage41()
  }


}