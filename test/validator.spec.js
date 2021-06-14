import validator from '../src/validator';

describe('validator', () => {
    it('debería ser un objeto', () => {
        expect(typeof validator).toBe('object');
    });

    describe('validator.isValid', () => {
        it('debería ser una función', () => {
            expect(typeof validator.isValid).toBe('function');
        });

        it('debería retornar true para "4485123087562803"', () => {
            // escribe aquí tu test
            expect(validator.isValid("4485123087562803")).toBe(true);

        });

        it('debería retornar true para "5564363463279231"', () => {
            // escribe aquí tu test
            expect(validator.isValid("5564363463279231")).toBe(true);

        });

        it('debería retornar false para "1233445465465712"', () => {
            // escribe aquí tu test
            expect(validator.isValid("1233445465465712")).toBe(false);

        });
    });

    describe('validator.maskify', () => {
        it('debería ser una función', () => {
            expect(typeof validator.maskify).toBe('function');
        });

        it('Debería retornar "############5616" para "4556364607935616"', () => {
            // escribe aquí tu test
            expect(validator.maskify("4556364607935616")).toBe('############5616');

        });

        it('Debería retornar "1" para "1"', () => {
            // escribe aquí tu test
            expect(validator.maskify("1")).toBe('1');
        });

        it('Debería retornar "######orld" para "helloworld"', () => {
            // escribe aquí tu test
            expect(validator.maskify("helloworld")).toBe('######orld');

        });
    });

    describe('validator.getIssuer', () => {
        it('debería ser una función', () => {
            expect(typeof validator.getIssuer).toBe('function');
        });

        it('Debería retornar "visa" para "4557880546281142"', () => {
            // escribe aquí tu test
            expect(validator.getIssuer("4557880546281142")).toBe('visa');

        });

        it('Debería retornar "visa" para "4557880546281142"', () => {
            // escribe aquí tu test
            expect(validator.getIssuer("1117880546281142")).toBe('');

        });

        it('Debería retornar "mastercard" para "5118420076302072"', () => {
            // escribe aquí tu test
            expect(validator.getIssuer("5118420076302072")).toBe('mastercard');

        });

        it('Debería retornar "american express" para "3418420076302072"', () => {
            // escribe aquí tu test
            expect(validator.getIssuer("3418420076302072")).toBe('american express');

        });
    });
});