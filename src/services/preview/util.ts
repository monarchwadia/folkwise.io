import { fileURLToPath } from "url";
import path, { dirname } from "path";
import type { Post } from "../posts";
import gm from "gm";
import { exec } from "child_process";

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
export const createPostPreview = (post: Post, format: Format) =>  {
  const filename = generateFilename(post.id)
  const sanitizedTitle = sanitizeTitle(post.title);

  return new Promise<string>((resolve, reject) => {
    exec(`convert \
      -size 400x400 \
      -background white \
      -font Ubuntu \
      -pointsize 32 \
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

const generateFilename = (filename: string) => path.join(...OUTPUT_DIR, filename) + ".png";