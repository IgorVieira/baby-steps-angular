import { BabyStepsAngular2Page } from './app.po';

describe('baby-steps-angular2 App', () => {
  let page: BabyStepsAngular2Page;

  beforeEach(() => {
    page = new BabyStepsAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
