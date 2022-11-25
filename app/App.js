import { CharctersController } from "./Controllers/charctersController.js";
import { EpisodesController } from "./Controllers/EpisodesController.js";

class App {
  charctersController = new CharctersController();
  episodesController = new EpisodesController();
}

window["app"] = new App();
