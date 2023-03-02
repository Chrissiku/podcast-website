import { Controller } from "@hotwired/stimulus";
import "shikwasa/dist/style.css";
import { Player, Chapter } from "shikwasa";

// Connects to data-controller="podcast"
export default class extends Controller {
  connect() {
    console.log("Hello form stimulus", this.element);
    Player.use(Chapter);

    const player = new Player({
      container: () => this.element,
      audio: {
        title: this.data.get("title"),
        artist: "Christian Siku",
        cover:
          "https://media.istockphoto.com/id/514794988/photo/audio-bible.jpg?s=612x612&w=is&k=20&c=FjeJaO-uDHz48SqGZSBWAnMupKHrekLczSAsWA8z2fI=",
        src: this.data.get("url"),
        chapters: [
          {
            title: "Chapter 1 for test",
            startTime: 1,
            endTime: 4,
          },
          {
            title: "Chapter 2 for test",
            startTime: 5,
            endTime: 8,
          },
        ],
      },
    });
  }
}
