import React from 'react';
import { Lock } from 'lucide-react';

export default function ProductTeaser() {
  return (
    <section className="py-12 px-4 bg-indigo-50/50 dark:bg-slate-800/30">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-6">
          <Lock size={24} />
        </div>
        <h2 className="text-2xl font-serif text-slate-800 dark:text-slate-100 mb-4">
          Conteúdo Premium para o Sono
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          Em breve, tenha acesso a guias de sono, ruído branco exclusivo e playlists estendidas para a noite toda.
        </p>
        <button className="px-8 py-3 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium rounded-full border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors shadow-sm">
          Entrar na Lista de Espera
        </button>
      </div>
    </section>
  );
}
