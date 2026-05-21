import { ArrowRight, Users, Play, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CodeBlock } from './CodeBlock'
import { SectionHeader } from './SectionHeader'

const Ejemplo_codigo = `// Definición de una clase en ChapinScript
banda Robot {
    cabal energia;
    chisme modelo;

barrio:
    nimais cargar(cabal energia) {
        vos->energia = energia;
    }

    casaca estaListo() {
        vonos vos->energia > 0;
    }
}

// Crear una instancia y usar el objeto
cabal nivel = 100;
simon (nivel > 50) {
    chotear('Robot con energía suficiente');
} chapus {
    chotear('Batería baja');
}`

const cards = [
  {
    icon: Users,
    title: 'Creadores',
    description: 'Adrian Díaz, Carlos Hernández, Angel Martínez — Proyecto de Compiladores.',
  },
  {
    icon: Play,
    title: 'Transpilador',
    description: 'Convierte código ChapinScript (.chs) a C++ válido con análisis léxico, sintáctico y semántico completo.',
  },
  {
    icon: Download,
    title: 'Exportable',
    description: 'Exporta el código C++ generado y las bitácoras de errores en formatos listos para usar.',
  },
]

export function HomeView() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-14 lg:px-10">
      {/* Hero */}
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          badge="Versión — v1.0.0"
          title="Compilador ChapinScript"
          description="ChapinScript (Chs) es un lenguaje de programación transpilado a C++ con una sintaxis inspirada en el español guatemalteco. Explora su documentación, playground y referencia de errores."
        />

        <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/comenzar"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-7 py-4 text-lg font-medium text-white transition hover:bg-brand-600 shadow-sm"
          >
            Cómo usar el transpilador
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <div className="mb-6 inline-flex rounded-2xl bg-brand-50 p-4 text-brand-500">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-4 max-w-sm text-base leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>

      {/* Code example */}
      <div className="mt-14">
        <h2 className="mb-5 text-2xl font-semibold text-slate-800">Ejemplo de código ChapinScript</h2>
        <CodeBlock label="‹/› chapinScript — Robot.chs" code={Ejemplo_codigo} actionLabel="Copiar" />
      </div>

      {/* Bottom links */}
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-slate-900">Documentación</h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Aprende todas las palabras reservadas, tipos de datos, estructuras de control, clases y excepciones de ChapinScript con ejemplos reales.
          </p>
          <Link
            to="/documentacion/chotear"
            className="mt-6 inline-flex items-center gap-1 text-base font-medium text-brand-500 hover:text-brand-600"
          >
            Ir a la documentación <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </div>
    </section>
  )
}