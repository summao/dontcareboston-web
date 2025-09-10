import { FeedService } from './feed-service';
import { HttpClient } from '@angular/common/http';

describe('FeedService', () => {
  let service: FeedService;
  let http: HttpClient;

  beforeEach(() => {
    http = {} as HttpClient;
    service = new FeedService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
