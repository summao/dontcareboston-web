import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedCard } from "./feed/feed-card/feed-card";
import { FeedPage } from "./feed/feed-page/feed-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeedPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dontcareboston-web');
}
