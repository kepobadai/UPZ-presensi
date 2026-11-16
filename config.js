// GANTI URL DI BAWAH DENGAN URL WEB APP DEPLOYMENT TERBARU DARI APPS SCRIPT
const API_URL = "https://script.google.com/macros/s/AKfycbwK2UqA4Wt60NuZMFADyJhx-ht8DhhQCj80n1nKoq0P_Zb2_phccNk1aqahFtkOBnNi/exec";

async function apiCall(action, data = {}) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: action, data: data })
    });
    return await response.json();
  } catch (err) {
    return { success: false, message: "Gagal terhubung ke server. Periksa koneksi internet." };
  }
}