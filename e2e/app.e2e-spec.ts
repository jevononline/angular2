import { CecWebappPage } from './app.po';

describe('cec-webapp App', () => {
  let page: CecWebappPage;

  beforeEach(() => {
    page = new CecWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
