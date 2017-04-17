import { RecipeBookProjectPage } from './app.po';

describe('recipe-book-project App', () => {
  let page: RecipeBookProjectPage;

  beforeEach(() => {
    page = new RecipeBookProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rec-book-app works!');
  });
});
