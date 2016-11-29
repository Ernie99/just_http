import { JustHttpPage } from './app.po';

describe('just-http App', function() {
  let page: JustHttpPage;

  beforeEach(() => {
    page = new JustHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
