'use client';

import Link from 'next/link';
import { Sparkles, Video, MessageSquare, Image, Mic, Edit, DollarSign, Check, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mind AI
              </span>
            </div>
            <Link
              href="/dashboard"
              className="px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/25"
            >
              Entrar
            </Link>
          </div>
        </div>
      </header>

      {/* Banner Principal */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-purple-300">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Crie. Inove. Lucre.
            </span>
            <br />
            <span className="text-white">
              Tudo com a força da
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Inteligência Artificial.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            A plataforma completa de IA para criadores, empresas e inovadores que querem transformar ideias em realidade.
          </p>
          
          <Link
            href="/dashboard"
            className="inline-flex items-center space-x-2 px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/50"
          >
            <span>Começar Agora</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Blocos de Recursos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Recursos Poderosos
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Video,
                title: 'Criação de Vídeos Realistas',
                description: 'Gere vídeos profissionais com IA em minutos. Escolha estilos, vozes e durações.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: MessageSquare,
                title: 'Chat Inteligente',
                description: 'Converse com modelos avançados de IA. GPT-4, GPT-4o e muito mais.',
                gradient: 'from-blue-500 to-purple-500',
              },
              {
                icon: Image,
                title: 'Gerador de Imagens',
                description: 'Crie imagens incríveis em diversos estilos: realista, anime, 3D e luxo.',
                gradient: 'from-pink-500 to-purple-500',
              },
              {
                icon: Mic,
                title: 'Roteiros e Voz IA',
                description: 'Transforme textos em narrações humanas em vários idiomas e vozes.',
                gradient: 'from-purple-500 to-blue-500',
              },
              {
                icon: Edit,
                title: 'Editor de Conteúdo',
                description: 'Transforme textos em vídeos com música, narração e edição automática.',
                gradient: 'from-pink-500 to-red-500',
              },
              {
                icon: DollarSign,
                title: 'Monetização',
                description: 'Ganhe dinheiro com suas criações. Sistema de afiliados e analytics completo.',
                gradient: 'from-green-500 to-emerald-500',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1M+', label: 'Usuários Ativos' },
              { value: '50M+', label: 'Vídeos Criados' },
              { value: '150+', label: 'Países' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Escolha Seu Plano
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Comece grátis e escale conforme sua necessidade
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Gratuito */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Gratuito</h3>
              <div className="text-4xl font-bold mb-6">R$ 0<span className="text-lg text-gray-400">/mês</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">3 vídeos por mês</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Chat básico</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">5 imagens por mês</span>
                </li>
              </ul>
              <Link
                href="/dashboard"
                className="block w-full py-3 rounded-full bg-gray-700 hover:bg-gray-600 text-center font-semibold transition-all duration-300"
              >
                Começar Grátis
              </Link>
            </div>

            {/* Plano Pro */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 to-pink-950/50 border-2 border-purple-500 relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/30">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">
                R$ 97<span className="text-lg text-gray-400">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Vídeos ilimitados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Imagens ilimitadas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Chat IA avançado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Vozes premium</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Exportação 4K</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Suporte 24/7</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Sem marca d'água</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Acesso API</span>
                </li>
              </ul>
              <Link
                href="/dashboard"
                className="block w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-center font-bold transition-all duration-300 shadow-lg shadow-purple-500/50"
              >
                Assinar Pro
              </Link>
            </div>

            {/* Plano Empresarial */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Empresarial</h3>
              <div className="text-4xl font-bold mb-6">
                R$ 297<span className="text-lg text-gray-400">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Tudo do Pro +</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Equipes ilimitadas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Gerente dedicado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">SLA garantido</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Customizações</span>
                </li>
              </ul>
              <Link
                href="/dashboard"
                className="block w-full py-3 rounded-full bg-gray-700 hover:bg-gray-600 text-center font-semibold transition-all duration-300"
              >
                Falar com Vendas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-purple-300">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Recursos</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Preços</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Documentação</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-purple-300">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Sobre</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Carreiras</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Imprensa</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-purple-300">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Tutoriais</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Comunidade</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Suporte</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-purple-300">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Email</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Discord</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mind AI
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Mind AI. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
