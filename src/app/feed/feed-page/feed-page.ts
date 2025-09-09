import { Component } from '@angular/core';
import { FeedCard } from '../feed-card/feed-card';
import { PostDto } from '../dtos/post-dto';

@Component({
    selector: 'app-feed-page',
    imports: [FeedCard],
    templateUrl: './feed-page.html',
    styleUrl: './feed-page.css'
})
export class FeedPage {
    today = new Date();
    feeds: PostDto[] = [
        { 
            id: '1',
            message: 'วันนี้อากาศดีมาก ไปวิ่งที่สวนสาธารณะมา', 
            auther: {
                username: '',
                displayName: 'สมชาย ใจดี',
                profileImagePath: 'https://i.pravatar.cc/150?img=60',
            },
            createdDateTime: new Date(),
            visibility: 'Public',
        },
        { 
            id: '2',
            message: 'ไปเที่ยวบ้านเพื่อนมา มันชวนเล่นเกมส์', 
            auther: {
                username: '',
                displayName: 'สมศักดิ์ รักดี',
                profileImagePath: 'https://i.pravatar.cc/150?img=52',
            },
            createdDateTime: new Date(),
            visibility: 'Private',
        }
    ]
}


