import { Component, OnInit } from '@angular/core';
import { FeedCard } from '../feed-card/feed-card';
import { PostDto } from '../dtos/post-dto';
import { FeedService } from '../../services/feed-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-feed-page',
    imports: [FeedCard, AsyncPipe],
    templateUrl: './feed-page.html',
    styleUrl: './feed-page.css'
})
export class FeedPage implements OnInit {
    feeds$!: Observable<PostDto[]>; 

    constructor(private feedService: FeedService) {}

    ngOnInit(): void {
       this.feeds$ = this.feedService.getFeeds();
    }
}

