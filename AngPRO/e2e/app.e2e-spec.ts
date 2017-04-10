import { AngPROPage } from './app.po';

describe('ang-pro App', function() {
  let page: AngPROPage;

  beforeEach(() => {
    page = new AngPROPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
