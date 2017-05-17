import { BucketChallengePage } from './app.po';

describe('bucket-challenge App', () => {
  let page: BucketChallengePage;

  beforeEach(() => {
    page = new BucketChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
