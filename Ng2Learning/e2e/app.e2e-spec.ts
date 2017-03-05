import { Ng2LearningPage } from './app.po';

describe('ng2-learning App', () => {
  let page: Ng2LearningPage;

  beforeEach(() => {
    page = new Ng2LearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
