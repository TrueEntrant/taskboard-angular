import { TaskfieldModule } from './taskfield.module';

describe('TaskfieldModule', () => {
  let taskfieldModule: TaskfieldModule;

  beforeEach(() => {
    taskfieldModule = new TaskfieldModule();
  });

  it('should create an instance', () => {
    expect(taskfieldModule).toBeTruthy();
  });
});
