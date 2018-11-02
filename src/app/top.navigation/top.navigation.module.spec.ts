import { Top.NavigationModule } from './top.navigation.module';

describe('Top.NavigationModule', () => {
  let topNavigationModule: Top.NavigationModule;

  beforeEach(() => {
    topNavigationModule = new Top.NavigationModule();
  });

  it('should create an instance', () => {
    expect(topNavigationModule).toBeTruthy();
  });
});
