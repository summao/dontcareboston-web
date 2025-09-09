import { App } from './app';

describe('App', () => {
    let component: App;

    beforeEach(async () => {
        component = new App();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
