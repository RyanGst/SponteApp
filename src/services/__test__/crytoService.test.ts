import cryptoService from '../crypto';

it('should return hash from given string', () => {
  const str = cryptoService.hashCode('1653239038');
  expect(str).toEqual(1815464640);
});

it('should return 0 if invalid input', () => {
  const str = cryptoService.hashCode({chave: 'valor'} as any);
  expect(str).toEqual(0);
});
