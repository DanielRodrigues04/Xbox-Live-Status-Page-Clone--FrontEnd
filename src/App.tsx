import React from 'react';
import { CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

type ServiceStatus = 'operational' | 'limited' | 'down';

interface Service {
  name: string;
  status: ServiceStatus;
  description: string;
}

const services: Service[] = [
  {
    name: 'Perfil e sistema de conquistas',
    status: 'operational',
    description: 'Jogadores podem acessar seus perfis e conquistas'
  },
  {
    name: 'Jogos na nuvem',
    status: 'operational',
    description: 'Streaming de jogos está funcionando normalmente'
  },
  {
    name: 'Loja Xbox',
    status: 'limited',
    description: 'Alguns usuários podem experimentar lentidão'
  },
  {
    name: 'Multijogador',
    status: 'operational',
    description: 'Jogos multiplayer estão funcionando normalmente'
  },
  {
    name: 'Xbox Game Pass',
    status: 'operational',
    description: 'Acesso ao catálogo de jogos está normal'
  }
];

const StatusIcon = ({ status }: { status: ServiceStatus }) => {
  switch (status) {
    case 'operational':
      return <CheckCircle2 className="w-6 h-6 text-green-500" />;
    case 'limited':
      return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
    case 'down':
      return <HelpCircle className="w-6 h-6 text-red-500" />;
  }
};

const StatusText = ({ status }: { status: ServiceStatus }) => {
  switch (status) {
    case 'operational':
      return <span className="text-green-500">Operacional</span>;
    case 'limited':
      return <span className="text-yellow-500">Serviço Limitado</span>;
    case 'down':
      return <span className="text-red-500">Indisponível</span>;
  }
};

function App() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <header className="bg-[#107C10] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Status do Xbox Live</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <div>
              <h2 className="text-xl font-semibold">Todos os serviços estão operacionais</h2>
              <p className="text-gray-600">Última atualização: {new Date().toLocaleString('pt-BR')}</p>
            </div>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.name} className="border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <StatusIcon status={service.status} />
                    <h3 className="text-lg font-medium">{service.name}</h3>
                  </div>
                  <StatusText status={service.status} />
                </div>
                <p className="text-gray-600 ml-9">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Precisa de ajuda?</h2>
          <p className="text-gray-600 mb-4">
            Se você está tendo problemas com os serviços Xbox, visite nossa página de suporte para obter ajuda.
          </p>
          <button className="bg-[#107C10] text-white px-6 py-2 rounded-md hover:bg-[#0B5B0B] transition-colors">
            Obter Suporte
          </button>
        </div>
      </main>

      <footer className="bg-gray-100 py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Microsoft. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;