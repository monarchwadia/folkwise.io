import type { MetatagGenerator } from "../types";
import general from "./general.metatags";
import twitter from "./twitter.metatags"

const metatagGenerators: MetatagGenerator[] = [general, twitter];

export default metatagGenerators;
