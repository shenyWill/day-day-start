import { httpRequest } from '@gulux/mocker/bootstrap';

describe('controller', () => {
  it('should request ok', async () => {
    const resp = await httpRequest.get('/');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({ name: 'gulux', email: 'gulux@bytedance.com' });
  });
});
