import { browser } from 'protractor';
import { AppSharedPage } from './page-objects/app-shared.po';
import { ShellPage } from './page-objects/shell.po';

describe('when the app loads', () => {
  const app = new AppSharedPage();
  const shell = new ShellPage();

  beforeAll(async () => {
    await app.navigateAndSetLanguage();
  });

  it('should display the home page', async () => {
    expect(await browser.getCurrentUrl()).toContain('/');
  });

  describe('and the user logs in', () => {
    it('should display the hello message', async () => {
      expect(await shell.getParagraphText()).toEqual('Radio Rasclat');
    });
  });
});
