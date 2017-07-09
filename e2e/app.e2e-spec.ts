import { SocialsPage } from './app.po';

describe('socials App', () => {
  let page: SocialsPage;

  beforeEach(() => {
    page = new SocialsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
