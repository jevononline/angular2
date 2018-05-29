import { StaffStatusPipe } from './staff-status.pipe';

describe('StaffStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new StaffStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
