import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class ChaletImage {
  readonly id: string;
  readonly url: string;
  readonly tempChaletId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChaletImage>);
  static copyOf(source: ChaletImage, mutator: (draft: MutableModel<ChaletImage>) => MutableModel<ChaletImage> | void): ChaletImage;
}

export declare class Chalet {
  readonly id: string;
  readonly translation: string;
  readonly calendar: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Chalet>);
  static copyOf(source: Chalet, mutator: (draft: MutableModel<Chalet>) => MutableModel<Chalet> | void): Chalet;
}