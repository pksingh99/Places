import { SilkPage } from './app.po';

describe('silk App', () => {
  let page: SilkPage;

  beforeEach(() => {
    page = new SilkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
