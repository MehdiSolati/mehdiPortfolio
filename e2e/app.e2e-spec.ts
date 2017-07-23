import { MichaelsolatiComPage } from './app.po';

describe('michaelsolati-com App', () => {
  let page: MichaelsolatiComPage;

  beforeEach(() => {
    page = new MichaelsolatiComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
