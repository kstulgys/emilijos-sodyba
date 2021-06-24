// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ChaletImage, Chalet } = initSchema(schema);

export {
  ChaletImage,
  Chalet
};