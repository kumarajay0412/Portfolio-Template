---
title: "Automating Alt Tag Generation for Images in React Apps Using GPT-4"
excerpt: "Learn how to set up and use a script to automatically generate descriptive alt tags for images in your React application using OpenAI's GPT-4 model."
coverImage: "/assets/blog/alt-tag-generation/cover.jpg"
date: "2023-09-20T12:00:00.000Z"
author:
  name: AI Assistant
  picture: "/assets/blog/authors/ai-assistant.png"
ogImage:
  url: "/assets/blog/alt-tag-generation/cover.jpg"
---

# Automating Alt Tag Generation for Images in React Apps

In this blog post, we'll walk through the process of setting up and using a script to automatically generate alt tags for images in your React application. This script uses OpenAI's GPT-4 model to create descriptive alt text for images, improving accessibility and SEO.

## Prerequisites

- Node.js installed on your machine
- A React application
- An OpenAI API key

## Step 1: Install Dependencies

First, let's install the necessary dependencies. Open your terminal and run:

```bash
npm install openai fs path
```

## Step 2: Create the Script

Create a new file named `generateAltTags.js` in your project's `scripts` folder. If the folder doesn't exist, create it:

```bash
mkdir scripts
touch scripts/generateAltTags.js
```

## Step 3: Add the Script Content

Copy the following code into `generateAltTags.js`:

```javascript
const { OpenAI } = require("openai");
const fs = require("fs");
const path = require("path");

const allowedImageFormats = ["png", "jpeg", "jpg", "gif", "webp"];

const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY_HERE",
});

const { OpenAI } = require("openai");

function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files?.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findTsxFiles(filePath, fileList);
    } else if (path.extname(file) === ".tsx" || path.extname(file) === ".jsx") {
      fileList.push(filePath);
    }
  });

  return fileList;
}

async function generateAltText(imageSrc) {
  let imageUrl;

  if (imageSrc.startsWith("http") || imageSrc.startsWith("https")) {
    // For remote URLs, use them directly
    imageUrl = imageSrc;
  } else if (imageSrc.startsWith("data:")) {
    // For data URLs, use them directly
    imageUrl = imageSrc;
  } else {
    // For local files, read and convert to base64
    try {
      let imagePath;
      if (imageSrc.startsWith("/assets")) {
        imagePath = path.join(__dirname, "..", "public", imageSrc);
      } else {
        imagePath = path.join(__dirname, "..", imageSrc);
      }
      const imageBuffer = fs.readFileSync(imagePath);
      const base64Image = imageBuffer.toString("base64");
      const mimeType = path.extname(imageSrc).slice(1);
      imageUrl = `data:image/${mimeType};base64,${base64Image}`;
    } catch (error) {
      console.error("Error reading local file:", error);
      return "";
    }
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Describe this image concisely for an alt tag in less than 10 words and Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop.:",
            },
            { type: "image_url", image_url: { url: imageUrl } },
          ],
        },
      ],
      max_tokens: 300,
    });
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating alt text:", error);
    return "";
  }
}

async function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const imgRegex = /<img(?!\s+alt=)[^>]*\ssrc=\{([^}]+)\}[^>]*>/g;
  let modified = false;
  content = content.replace(imgRegex, async (fullTag, src) => {
    if (src.includes("generateS3Url")) {
      //  if using cloudfront
      const urlPattern = /'([^']+)'/;
      const urlMatch = src.match(urlPattern);
      if (urlMatch) {
        src = `YOUR_CLOUDFRONT_URL_${urlMatch[1]}`;
      }
    }

    const fileExtension = path.extname(src).toLowerCase().slice(1);
    if (!allowedImageFormats.includes(fileExtension)) {
      console.log(`Skipping unsupported image format: ${fileExtension}`);
      return fullTag;
    }

    const altText = await generateAltText(src);
    if (altText) {
      modified = true;
      return fullTag.replace("/>", ` alt="${altText}"/>`);
    }
    return fullTag;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated: ${filePath}`);
  }
}

async function main() {
  const srcDir = path.join(__dirname, "..", "src");
  const tsxFiles = findTsxFiles(srcDir);
  await Promise.all(tsxFiles.map(processFile));
  console.log("Alt tag generation complete!");
}

main().catch(console.error);
```

Replace `'YOUR_OPENAI_API_KEY_HERE'` with your actual OpenAI API key.

## Step 4: Configure the Script

Adjust the following variables in the script if needed:

- `allowedImageFormats`: Add or remove image formats as necessary.
- `srcDir`: Modify the path if your React components are located in a different directory.

## Step 5: Add a npm Script

Add a new script to your `package.json` file:

```json
{
  "scripts": {
    "generate-alt-tags": "node scripts/generateAltTags.js"
  }
}
```

## Step 6: Run the Script

To generate alt tags for your images, run:

```bash
npm run generate-alt-tags
```

The script will:

1. Find all `.tsx` and `.jsx` files in your `src` directory.
2. Identify images without alt tags.
3. Generate descriptive alt text using GPT-4.
4. Update the image tags with the new alt text.

## Important Notes

- This script modifies your source files. Make sure to commit your changes before running it.
- The script handles local images, remote URLs, and data URLs.
- It skips images with unsupported formats.
- The generated alt text aims to be concise (less than 10 words) and avoids redundant terms like "image" or "photo".

## Conclusion

By implementing this script, you can automatically generate meaningful alt tags for images in your React application, enhancing accessibility and potentially improving SEO. Remember to review the generated alt text and make any necessary adjustments to ensure accuracy and relevance.

Happy coding!
