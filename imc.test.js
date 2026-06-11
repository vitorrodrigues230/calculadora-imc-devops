const calcularIMC = require('./imc');

test('Calcula o IMC corretamente para peso 80 e altura 2', () => {
    // 80 / (2 * 2) = 20.00
    expect(calcularIMC(80, 2)).toBe("20.00");
});
