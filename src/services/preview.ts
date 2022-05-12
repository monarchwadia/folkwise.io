import { fileURLToPath } from "url";
import path, { dirname } from "path";
import type { Post } from "./posts";
import gm from "gm";

// need to do this since we're using modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = [
  __dirname,
  "..", "..", "static", "socialpreviews"
]

// creates social media previews
export const createPostPreview = (post: Post) =>  {
  const filename = generateFilename(post.id)
  return new Promise<string>((resolve, reject) => {
    gm(400,700, "#ffffffff")
      .fontSize(20)
      .stroke("#000", 2)
      .fill("#000")
      .drawText(20, 72, "lol")
      .fill("#000")
      .drawText(40, 72, "cool")
      .write(filename, (err) => {
        if (err) {
          return reject(err)
        }
        return resolve(filename);
      })
  });
}

export const generateFilename = (filename: string) => path.join(...OUTPUT_DIR, filename) + ".png";