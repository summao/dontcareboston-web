import { FeedCard } from './feed-card';

describe('FeedCard', () => {
  let component: FeedCard;

  beforeEach(async () => {
    component = new FeedCard();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
