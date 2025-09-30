import { useState } from 'react';
import './App.css'

// Anda dapat menghapus import reactLogo dan viteLogo karena tidak digunakan lagi.
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css' // File CSS eksternal tidak digunakan karena memakai Tailwind

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika login sederhana
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Simulasi Login: Lihat konsol untuk data yang dimasukkan.');
  };
  
  // Fungsi alert kustom untuk menghindari alert() yang diblokir di lingkungan tertentu
  const alert = (message) => {
    const alertBox = document.getElementById('custom-alert');
    if (alertBox) {
      alertBox.textContent = message;
      alertBox.classList.remove('hidden');
      setTimeout(() => {
        alertBox.classList.add('hidden');
      }, 3000); // Sembunyikan setelah 3 detik
    }
  };

  return (
    // Latar belakang abu-abu muda dan penempatan di tengah layar
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      {/* Kotak Notifikasi Kustom (Pengganti alert()) */}
      <div id="custom-alert" className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg hidden transition-opacity duration-300 z-50">
        Simulasi Login: Lihat konsol untuk data yang dimasukkan.
      </div>

      {/* Container Utama Login Card */}
      <div className="flex w-full max-w-2xl bg-white shadow-2xl rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01] mx-auto">
        
        {/* Bagian Kiri (Placeholder Gambar) */}
        <div className="hidden sm:flex w-1/2 bg-gray-300 items-center justify-center p-8">
          <span className="text-gray-600 text-3xl font-bold">600 × 500</span>
        </div>

        {/* Bagian Kanan (Formulir Login) */}
        <div className="w-full sm:w-1/2 p-8 md:p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Login</h2>

          <form onSubmit={handleSubmit}>
            
            {/* Input Email */}
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                required
              />
            </div>

            {/* Input Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                required
              />
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800"
            >
              Login
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
