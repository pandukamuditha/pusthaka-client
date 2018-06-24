import { PatronModule } from './patron.module';

describe('PatronModule', () => {
  let patronModule: PatronModule;

  beforeEach(() => {
    patronModule = new PatronModule();
  });

  it('should create an instance', () => {
    expect(patronModule).toBeTruthy();
  });
});
