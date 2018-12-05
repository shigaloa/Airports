import { AeropuertosModule } from './aeropuertos.module';

describe('AeropuertosModule', () => {
  let aeropuertosModule: AeropuertosModule;

  beforeEach(() => {
    aeropuertosModule = new AeropuertosModule();
  });

  it('should create an instance', () => {
    expect(aeropuertosModule).toBeTruthy();
  });
});
