import { fileURLToPath } from "url";
import path, { dirname } from "path";

import gm from "gm";
import { exec } from "child_process";
import type { Post } from "src/types";
import type { MetatagGenerator } from "./types";

type Format = {
  width: number;
  height: number;
}

// need to do this since we're using modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = [
  __dirname,
  "..", "..", "..", "static", "socialpreviews"
]

const ALLOWED_CHAR_REGEX = /^[a-zA-Z0-9\s\']$/;

// creates social media previews
export const createPostPreview = (post: Post, opts: MetatagGenerator) =>  {
  const filename = generateFilename(opts.pathPrefix, post.id)
  const sanitizedTitle = sanitizeTitle(post.title);
  const {imageDimensions, metatags} = opts;
  const borderWidth = Math.max(imageDimensions.width, imageDimensions.height) * 0.10;

  return new Promise<string>((resolve, reject) => {
    exec(`convert \
      -size ${imageDimensions.width - (borderWidth * 2)}x${imageDimensions.height - (borderWidth * 2)} \
      -background white \
      -font Fira-Sans-SemiBold \
      -border ${borderWidth / 2} \
      -bordercolor black \
      -border ${borderWidth / 2} \
      -bordercolor white \
      -gravity center \
      caption:"${sanitizedTitle || 'untitled'}" \
      ${filename}
    `, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {

      }
    });
  });
}

const sanitizeTitle = (title:string) => title
  .split('')
  .filter(char => ALLOWED_CHAR_REGEX.test(char))
  .join('');

const generateFilename = (pathPrefix: string, filename: string) => path.join(...OUTPUT_DIR, pathPrefix, filename) + ".png";