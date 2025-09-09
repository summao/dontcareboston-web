import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
    selector: 'app-feed-card',
    imports: [DatePipe, CommonModule],
    templateUrl: './feed-card.html',
    styleUrl: './feed-card.css'
})
export class FeedCard {
    @Input() avatar: string = '';
    @Input() name: string = '';
    @Input() date: Date = new Date();
    @Input() visibility: string = '';
    @Input() message: string = '';

    liked: boolean = false;
    likeCount: number = 0;

    toggleLike() {
        this.liked = !this.liked;
        this.likeCount += this.liked ? 1 : -1;
    }
}
