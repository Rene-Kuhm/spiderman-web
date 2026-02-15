import { useState } from 'react';

interface FastCodeQuery {
  question: string;
  filters?: Record<string, string> | null;
  repo_filter?: string[];
  multi_turn?: boolean;
  session_id?: string | null;
}

interface FastCodeResponse {
  answer: string;
  total_tokens?: number;
  sources?: Array<{
    file: string;
    line?: number;
    snippet?: string;
  }>;
}

export const FastCode = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<FastCodeResponse | null>(null);
  const [fastCodeUrl, setFastCodeUrl] = useState('http://localhost:8000');
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const queryFastCode = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const payload: FastCodeQuery = {
        question: query,
        filters: null,
        repo_filter: ['spiderman-web'],
        multi_turn: false,
        session_id: null,
      };

      const res = await fetch(`${fastCodeUrl}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(apiKey && { 'Authorization': `Bearer ${apiKey}` }),
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`FastCode API error: ${res.status}`);
      }

      const data: FastCodeResponse = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('FastCode query error:', error);
      setResponse({
        answer: `Error: ${error instanceof Error ? error.message : 'Failed to connect to FastCode'}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    queryFastCode(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      queryFastCode(question);
    }
  };

  return (
    <div className="fastcode-integration">
      {/* Settings Panel */}
      <button 
        className="fastcode-settings-toggle"
        onClick={() => setShowSettings(!showSettings)}
      >
        ⚙️
      </button>

      {showSettings && (
        <div className="fastcode-settings-panel">
          <h3 className="fastcode-settings-title">FastCode Settings</h3>
          
          <div className="fastcode-setting-group">
            <label htmlFor="fastcode-url" className="fastcode-label">
              API URL
            </label>
            <input
              id="fastcode-url"
              type="text"
              value={fastCodeUrl}
              onChange={(e) => setFastCodeUrl(e.target.value)}
              placeholder="http://localhost:8000"
              className="fastcode-input"
            />
          </div>

          <div className="fastcode-setting-group">
            <label htmlFor="fastcode-api-key" className="fastcode-label">
              API Key (Optional)
            </label>
            <input
              id="fastcode-api-key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="fastcode-input"
            />
          </div>

          <div className="fastcode-info">
            <p className="fastcode-info-text">
              <strong>💡 Usage:</strong> FastCode analyzes code using semantic understanding and smart navigation.
            </p>
            <p className="fastcode-info-text">
              <strong>🚀 Features:</strong> 3-4x faster than Cursor, 44% cost reduction
            </p>
            <a 
              href="https://github.com/HKUDS/FastCode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="fastcode-link"
            >
              📖 View FastCode Documentation
            </a>
          </div>
        </div>
      )}

      {/* Main Query Interface */}
      <div className="fastcode-container">
        <div className="fastcode-header">
          <div className="fastcode-logo">
            <span className="fastcode-icon">🚀</span>
            <h2 className="fastcode-title">FastCode Integration</h2>
          </div>
          <p className="fastcode-description">
            Ask questions about the Spider-Man codebase
          </p>
        </div>

        <form onSubmit={handleSubmit} className="fastcode-form">
          <div className="fastcode-input-group">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about authentication, components, or any code question..."
              className="fastcode-textarea"
              rows={3}
              disabled={loading}
            />
          </div>

          <div className="fastcode-actions">
            <button 
              type="submit" 
              className="fastcode-submit-btn"
              disabled={loading || !question.trim()}
            >
              {loading ? '🔄 Analyzing...' : '🔍 Ask FastCode'}
            </button>
            
            <button 
              type="button" 
              className="fastcode-clear-btn"
              onClick={() => {
                setQuestion('');
                setResponse(null);
              }}
              disabled={loading}
            >
              🗑️ Clear
            </button>
          </div>
        </form>

        {/* Response Display */}
        {response && (
          <div className="fastcode-response">
            <div className="fastcode-response-header">
              <span className="fastcode-response-icon">💡</span>
              <h4 className="fastcode-response-title">Answer</h4>
              {response.total_tokens && (
                <span className="fastcode-tokens">
                  Tokens: {response.total_tokens}
                </span>
              )}
            </div>
            
            <div className="fastcode-response-content">
              <pre className="fastcode-response-text">
                {response.answer}
              </pre>
            </div>

            {response.sources && response.sources.length > 0 && (
              <div className="fastcode-sources">
                <h5 className="fastcode-sources-title">Sources</h5>
                <div className="fastcode-sources-list">
                  {response.sources.map((source, idx) => (
                    <div key={idx} className="fastcode-source-item">
                      <span className="fastcode-source-file">{source.file}</span>
                      {source.line && (
                        <span className="fastcode-source-line">: {source.line}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .fastcode-integration {
          position: relative;
          background: linear-gradient(180deg, #0d0d0d 0%, #1a1a2e 50%, #0d0d0d 100%);
          border-top: 2px solid #E63946;
          padding: 32px 0;
        }

        .fastcode-settings-toggle {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(230, 57, 70, 0.2);
          color: #E63946;
          border: 2px solid #E63946;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fastcode-settings-toggle:hover {
          background: #E63946;
          color: white;
          transform: rotate(90deg);
        }

        .fastcode-settings-panel {
          position: absolute;
          top: 60px;
          right: 16px;
          width: 350px;
          background: #1a1a2e;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }

        .fastcode-settings-title {
          font-size: 1.2rem;
          color: #E63946;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .fastcode-setting-group {
          margin-bottom: 16px;
        }

        .fastcode-label {
          display: block;
          font-size: 0.9rem;
          color: #999;
          margin-bottom: 6px;
          font-weight: 600;
        }

        .fastcode-input {
          width: 100%;
          padding: 10px 12px;
          background: #0d0d0d;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: white;
          font-size: 0.95rem;
          font-family: var(--font-body);
          transition: all 0.3s ease;
        }

        .fastcode-input:focus {
          outline: none;
          border-color: #E63946;
          box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.3);
        }

        .fastcode-info {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .fastcode-info-text {
          color: #888;
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .fastcode-info-text strong {
          color: #E63946;
        }

        .fastcode-link {
          display: inline-block;
          padding: 8px 16px;
          background: #E63946;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-top: 12px;
        }

        .fastcode-link:hover {
          background: #C1121F;
          transform: translateY(-2px);
        }

        .fastcode-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .fastcode-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .fastcode-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .fastcode-icon {
          font-size: 3rem;
        }

        .fastcode-title {
          font-size: 2rem;
          color: #E63946;
          margin: 0;
          font-family: var(--font-display);
          letter-spacing: 2px;
        }

        .fastcode-description {
          color: #999;
          font-size: 1rem;
        }

        .fastcode-form {
          margin-bottom: 24px;
        }

        .fastcode-input-group {
          margin-bottom: 16px;
        }

        .fastcode-textarea {
          width: 100%;
          padding: 16px;
          background: #0d0d0d;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          font-family: var(--font-body);
          line-height: 1.6;
          resize: vertical;
          transition: all 0.3s ease;
        }

        .fastcode-textarea:focus {
          outline: none;
          border-color: #E63946;
          box-shadow: 0 0 0 4px rgba(230, 57, 70, 0.3);
        }

        .fastcode-textarea:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .fastcode-actions {
          display: flex;
          gap: 12px;
        }

        .fastcode-submit-btn {
          flex: 1;
          padding: 14px 24px;
          background: linear-gradient(135deg, #E63946 0%, #C1121F 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-display);
        }

        .fastcode-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(230, 57, 70, 0.4);
        }

        .fastcode-submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .fastcode-clear-btn {
          padding: 14px 24px;
          background: transparent;
          color: #999;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-display);
        }

        .fastcode-clear-btn:hover:not(:disabled) {
          border-color: #E63946;
          color: #E63946;
          background: rgba(230, 57, 70, 0.1);
        }

        .fastcode-response {
          background: rgba(230, 57, 70, 0.05);
          border: 1px solid rgba(230, 57, 70, 0.2);
          border-radius: 12px;
          padding: 24px;
        }

        .fastcode-response-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .fastcode-response-icon {
          font-size: 2rem;
        }

        .fastcode-response-title {
          font-size: 1.3rem;
          color: white;
          margin: 0;
          font-family: var(--font-display);
        }

        .fastcode-tokens {
          font-size: 0.85rem;
          color: #999;
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 12px;
          border-radius: 4px;
        }

        .fastcode-response-content {
          background: #0d0d0d;
          border-radius: 8px;
          padding: 20px;
          overflow-x: auto;
        }

        .fastcode-response-text {
          color: #E63946;
          font-size: 0.95rem;
          line-height: 1.7;
          white-space: pre-wrap;
          word-wrap: break-word;
          margin: 0;
        }

        .fastcode-sources {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .fastcode-sources-title {
          font-size: 0.9rem;
          color: #999;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .fastcode-sources-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .fastcode-source-item {
          background: #1a1a2e;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .fastcode-source-file {
          color: #E63946;
          font-weight: 600;
        }

        .fastcode-source-line {
          color: #999;
        }

        @media (max-width: 768px) {
          .fastcode-settings-panel {
            width: 90%;
            right: 5%;
            top: 50px;
            padding: 16px;
          }

          .fastcode-container {
            padding: 0 12px;
          }

          .fastcode-title {
            font-size: 1.5rem;
          }

          .fastcode-actions {
            flex-direction: column;
          }

          .fastcode-submit-btn,
          .fastcode-clear-btn {
            width: 100%;
          }

          .fastcode-textarea {
            font-size: 0.95rem;
            padding: 12px;
          }
        }

        @media (max-width: 480px) {
          .fastcode-header {
            margin-bottom: 24px;
          }

          .fastcode-title {
            font-size: 1.2rem;
          }

          .fastcode-textarea {
            font-size: 0.9rem;
            padding: 10px;
          }

          .fastcode-response {
            padding: 16px;
          }

          .fastcode-response-text {
            font-size: 0.85rem;
          line-height: 1.5;
          }
        }
      `}</style>
    </div>
  );
};
