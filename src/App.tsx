import React, { useEffect, useState } from 'react';
import './App.css';
import { MessageCircle } from 'lucide-react';

interface UpdateStatus {
  available: boolean;
  downloaded: boolean;
}

function App() {
  const [updateStatus, setUpdateStatus] = useState<UpdateStatus>({
    available: false,
    downloaded: false,
  });

  useEffect(() => {
    // Verificar atualizações ao iniciar
    if (window.electron) {
      window.electron.checkForUpdates();

      // Listeners para atualizações
      window.electron.onUpdateAvailable(() => {
        setUpdateStatus((prev) => ({ ...prev, available: true }));
      });

      window.electron.onUpdateDownloaded(() => {
        setUpdateStatus((prev) => ({ ...prev, downloaded: true }));
      });
    }
  }, []);

  const handleInstallUpdate = () => {
    if (window.electron) {
      window.electron.quitAndInstall();
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo-section">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663515638583/YyKVHdxUNJ4AS3ezTpaB9t/graphics-vision-logo_9bff2ce4.png" 
              alt="Graphics Vision" 
              className="logo"
            />
            <div className="title-section">
              <h1>Graphics Vision</h1>
              <p>Gym CRM - Desktop</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <div className="welcome-container">
          <h2>Bem-vindo ao Gym CRM Desktop</h2>
          <p>Versão 1.0.0</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Sincronização em Nuvem</h3>
              <p>Dados sincronizados com Vercel em tempo real</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Auto-Update</h3>
              <p>Atualizações automáticas via GitHub</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💾</div>
              <h3>Dados Locais</h3>
              <p>Funciona offline com sincronização automática</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Segurança</h3>
              <p>Autenticação segura e proteção de dados</p>
            </div>
          </div>

          {/* Update notification */}
          {updateStatus.available && (
            <div className="update-notification">
              <div className="notification-content">
                <h4>Atualização Disponível</h4>
                <p>Uma nova versão do Gym CRM está disponível.</p>
              </div>
              {updateStatus.downloaded && (
                <button 
                  className="update-button"
                  onClick={handleInstallUpdate}
                >
                  Instalar e Reiniciar
                </button>
              )}
            </div>
          )}

          {/* Info section */}
          <div className="info-section">
            <h3>Próximas Funcionalidades</h3>
            <ul>
              <li>✅ Dashboard completo com gráficos</li>
              <li>✅ Gestão de alunos e pagamentos</li>
              <li>✅ Relatórios avançados</li>
              <li>✅ Sincronização em tempo real</li>
              <li>✅ Suporte via WhatsApp integrado</li>
            </ul>
          </div>
        </div>
      </main>

      {/* WhatsApp Support Button */}
      <a
        href="https://api.whatsapp.com/message/R7RCW4CIHADVJ1?autoload=1&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Footer */}
      <footer className="app-footer">
        <p>Gym CRM © 2026 — Todos os direitos reservados <span className="brand">Graphics Vision</span></p>
      </footer>
    </div>
  );
}

export default App;
