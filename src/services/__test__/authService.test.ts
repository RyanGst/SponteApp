import authService from "../auth";


it('should return a object with user info', async () => {
    const response = await authService.login({email: "ryan@sponte.com", password: "sponte_é_dimais"});
    expect(typeof response).toBe('object');
});

it('should return a acess token', async () => {
    const response = await authService.login({email: "ryan@sponte.com", password: "sponte_é_dimais"});
    expect(typeof response.acess_token).toBe('number');
});
