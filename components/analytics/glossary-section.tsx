"use client";

import React from 'react';
import { DEFINITIONS } from './constants';
import { Glossary } from './glossary';

export const GlossarySection = () => {
  return (
    <section id="glossary" className="scroll-mt-28">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Lexique de Performance</h3>
        <p className="text-slate-500 text-lg">Pour interpréter nos résultats en toute transparence.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DEFINITIONS.map((def, i) => (
          <Glossary key={i} definition={def} index={i} />
        ))}
      </div>
    </section>
  );
};
