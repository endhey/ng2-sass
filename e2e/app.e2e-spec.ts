import { Ng2CliSassPage } from './app.po';

describe('ng2-cli-sass App', function() {
  let page: Ng2CliSassPage;

  beforeEach(() => {
    page = new Ng2CliSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
