import Link from 'next/link';
import { getAllPrompts, getPromptBySlug } from '@/lib/prompts';

export function generateStaticParams() {
  return getAllPrompts().map((prompt) => ({ slug: prompt.slug }));
}

const normalizeList = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  return [String(value)];
};

export default async function PromptPage({ params }) {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);

  const tags = [
    ...normalizeList(prompt.categories),
    ...normalizeList(prompt.subcategories),
    ...normalizeList(prompt.styles),
    ...normalizeList(prompt.techniques),
    ...normalizeList(prompt.applications),
  ];

  return (
    <main className="container article">
      <Link href="/" className="back">← Voltar para a biblioteca</Link>
      <h1>{String(prompt.title || '')}</h1>
      <div className="meta">
        <span>{String(prompt.level || '')}</span>
        <span>{String(prompt.tool || '')}</span>
        <span>{String(prompt.updatedAt || '')}</span>
      </div>

      <section className="panel block">
        <h2>Metadados</h2>
        <div className="tags" style={{ marginTop: 16 }}>
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </section>

      <section className="panel block">
        <h2>Descrição</h2>
        <p>{String(prompt.description || '')}</p>
      </section>

      <section className="panel block">
        <h2>Prompt</h2>
        <pre>{String(prompt.content || '').trim()}</pre>
      </section>
    </main>
  );
}
