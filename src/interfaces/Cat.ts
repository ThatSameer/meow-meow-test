export type PouchSizes = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface Cat {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: PouchSizes;
}
