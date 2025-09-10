import { Injectable } from '@angular/core';
import { PostDto } from '../feed/dtos/post-dto';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FeedService {
    constructor(private http: HttpClient) { }

    public getFeeds(): Observable<PostDto[]> {
        const url = `http://localhost:5254/Posts`;
        return this.http.get<PostDto[]>(url).pipe(
            map(rawFeeds => PostDto.fromArray(rawFeeds))
        );
    }
}
