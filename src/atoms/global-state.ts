import { atom } from 'recoil';

export default atom({
  key: 'state',
  default: {
    globalKey: 'globalValue'
  }
});
