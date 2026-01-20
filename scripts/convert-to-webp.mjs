import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
// import { glob } from 'glob';

// Configuration
const IMAGES_DIR = path.resolve('public/assets/images/projects');
const CONTENT_DIR = path.resolve('content/projects');

async function convertImages() {
    console.log('Starting image conversion...');

    // 1. Process Images
    if (!fs.existsSync(IMAGES_DIR)) {
        console.error(`Images directory not found: ${IMAGES_DIR}`);
        return;
    }

    const files = fs.readdirSync(IMAGES_DIR).filter(file => file.endsWith('.png'));
    console.log(`Found ${files.length} PNG images.`);

    for (const file of files) {
        const inputPath = path.join(IMAGES_DIR, file);
        const outputPath = path.join(IMAGES_DIR, file.replace('.png', '.webp'));

        try {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);

            // Delete original PNG
            fs.unlinkSync(inputPath);
            console.log(`Deleted: ${file}`);
        } catch (error) {
            console.error(`Error converting ${file}:`, error);
        }
    }

    // 2. Update Content References
    console.log('Updating MDX content...');
    const mdxFiles = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.mdx'));

    for (const file of mdxFiles) {
        const filePath = path.join(CONTENT_DIR, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Simple replace for known path pattern
        // from: /assets/images/projects/filename.png
        // to:   /assets/images/projects/filename.webp

        if (content.includes('.png')) {
            // specific replacement for project assets to avoid breaking other external links
            // looking for /assets/images/projects/....png
            const regex = /(\/assets\/images\/projects\/[^"\s\)]+)\.png/g;

            if (regex.test(content)) {
                content = content.replace(regex, '$1.webp');
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated references in: ${file}`);
            }
        }
    }

    console.log('Conversion and update complete!');
}

convertImages();
