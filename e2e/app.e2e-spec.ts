import { TaskCardPage } from './app.po';

describe('task-card App', () => {
  let page: TaskCardPage;

  beforeEach(() => {
    page = new TaskCardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
