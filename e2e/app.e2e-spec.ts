import { MichaelWebPortfolioPage } from './app.po';

describe('michael-web-portfolio App', () => {
  let page: MichaelWebPortfolioPage;

  beforeEach(() => {
    page = new MichaelWebPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
