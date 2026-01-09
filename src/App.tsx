import React from "react";

export const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Starter Kit</h1>
        <p>Vite + React + TypeScript</p>
        <button
          className="primary-button"
          onClick={() => alert("Starter kit siap dipakai!")}
        >
          Coba Klik
        </button>
      </header>
    </div>
  );
};

