// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

import { AppPage } from './app.po';

describe('SAS App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: SAS Application', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('SAS Application');
  });
});
