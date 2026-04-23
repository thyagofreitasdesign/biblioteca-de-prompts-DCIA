import Link from 'next/link';
import { getAllPrompts, getPromptBySlug } from '@/lib/prompts';

export function generateStaticParams() {
  return getAllPrompts().map((prompt) => ({ slug: prompt.slug }));
}

export default async function PromptPage({ params }) {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);

  return (
    <main className="container article">
      <Link href="/" className="back">← Voltar para a biblioteca</Link>
      <h1>{prompt.title}</h1>
      <div className="meta">
        <span>{prompt.level}</span>
        <span>{prompt.tool}</span>
        <span>{prompt.updatedAt}</span>
      </div>

      <section className="panel block">
        <h2>Metadados</h2>
        <div className="tags" style={{marginTop: 16}}>
          {[...(prompt.categories || []), ...(prompt.subcategories || []), ...(prompt.styles || []), ...(prompt.techniques || []), ...(prompt.applications || [])].map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </section>

      <section className="panel block">
        <h2>Descrição</h2>
        <p>{prompt.description}</p>
      </section>

      <section className="panel block">
        <h2>Prompt</h2>
        <pre>{prompt.content.trim()}</pre>
      </section>
    </main>
  );
}
