import type { MetatagGenerator } from '../types';
import general from './general.metatags';
import twitter from './twitter.metatags';
import whatsapp from './whatsapp.metatags';

const metatagGenerators: MetatagGenerator[] = [general, twitter, whatsapp];

export default metatagGenerators;
