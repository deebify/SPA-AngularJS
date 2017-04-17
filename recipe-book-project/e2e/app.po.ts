import { browser, element, by } from 'protractor';

export class RecipeBookProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rec-book-app-root h1')).getText();
  }
}
