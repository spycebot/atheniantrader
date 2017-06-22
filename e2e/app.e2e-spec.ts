import { AtheniantraderPage } from './app.po';

describe('atheniantrader App', () => {
  let page: AtheniantraderPage;

  beforeEach(() => {
    page = new AtheniantraderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
