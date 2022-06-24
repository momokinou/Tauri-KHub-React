import { useState } from 'react';
import './App.css'
import { invoke } from '@tauri-apps/api';

function App() {
  return (
    <div>
      <input type="text" id="input" />
    </div>
  )
}

export default App
