import { helloWorld } from '@src/index';

describe('helloWorld', () => {
    const consoleLogSpy: jest.SpyInstance = jest.spyOn(console, 'log');

    beforeEach(() => {
        consoleLogSpy.mockImplementation();
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    it('should log "Hello world from simply-library-ts-template"', () => {
        helloWorld();
        expect(consoleLogSpy).toHaveBeenCalledWith('Hello world from simply-library-ts-template');
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);

    });
});
