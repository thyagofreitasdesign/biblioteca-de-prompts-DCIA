import Link from 'next/link';
import { getAllPrompts, getFilterOptions } from '@/lib/prompts';

export default function Home() {
  const prompts = getAllPrompts();
  const filters = getFilterOptions(prompts);

  return (
    <main className="container">
      <section className="hero">
        <div className="eyebrow">Método DCIA</div>
        <h1>Prompt Vault cinematográfico</h1>
        <p>Base pronta para subir na Vercel com taxonomia em camadas, conteúdo em Markdown e estrutura fácil de atualizar por arquivo.</p>
      </section>

      <section className="panel filters">
        <input className="input" placeholder="Buscar por título, tema, estilo ou técnica" readOnly />
        <select className="select" defaultValue="">
          <option value="">Tema sagrado</option>
          {filters.categories.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="select" defaultValue="">
          <option value="">Linguagem visual</option>
          {filters.styles.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="select" defaultValue="">
          <option value="">Técnica</option>
          {filters.techniques.map((item) => <option key={item}>{item}</option>)}
        </select>
      </section>

      <section className="grid">
        {prompts.map((prompt) => (
          <Link key={prompt.slug} href={`/prompts/${prompt.slug}`} className="panel card">
            <div>
              <div className="meta">
                <span>{prompt.level}</span>
                <span>{prompt.tool}</span>
              </div>
              <h3>{prompt.title}</h3>
              <p>{prompt.description}</p>
            </div>
            <div className="tags">
              {[...(prompt.categories || []).slice(0,2), ...(prompt.styles || []).slice(0,1), ...(prompt.techniques || []).slice(0,1)].map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
