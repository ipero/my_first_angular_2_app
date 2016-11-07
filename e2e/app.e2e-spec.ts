import { FirstAngular2AppPage } from './app.po';

describe('first-angular-2-app App', function() {
  let page: FirstAngular2AppPage;

  beforeEach(() => {
    page = new FirstAngular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
