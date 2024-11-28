import { PouchSizes } from 'src/helpers/pouchPrices';

export interface Cat {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: PouchSizes;
}
