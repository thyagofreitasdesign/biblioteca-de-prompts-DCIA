import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const promptsDirectory = path.join(process.cwd(), 'content/prompts');

export function getAllPrompts() {
  const fileNames = fs.readdirSync(promptsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(promptsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { slug, ...data, content };
  }).sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
}

export function getPromptBySlug(slug) {
  const fullPath = path.join(promptsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, ...data, content };
}

export function getFilterOptions(prompts) {
  const uniq = (key) => [...new Set(prompts.flatMap((p) => p[key] || []))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  return {
    categories: uniq('categories'),
    styles: uniq('styles'),
    techniques: uniq('techniques'),
    applications: uniq('applications')
  };
}
