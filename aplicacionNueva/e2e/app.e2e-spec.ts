import { AplicacionNuevaPage } from './app.po';

describe('aplicacion-nueva App', () => {
  let page: AplicacionNuevaPage;

  beforeEach(() => {
    page = new AplicacionNuevaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
