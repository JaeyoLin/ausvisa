import {
  Common
} from '../';

it('判斷 LOCAL_STORAGE_AUTH_KEY 是否被修改', () => {
  const compareString = 'S_PRE_FIX_AUTH';
  expect(Common.LOCAL_STORAGE_AUTH_KEY).toEqual(compareString);
});

it('判斷 LOCAL_STORAGE_I18N_KEY 是否被修改', () => {
  const compareString = 'S_PRE_FIX_I18N';
  expect(Common.LOCAL_STORAGE_I18N_KEY).toEqual(compareString);
});