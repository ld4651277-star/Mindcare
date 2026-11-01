import React from 'react';

const MindcareWellnessApp = () => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com"></script>
<script id="tailwind-config">
  tailwind.config = { darkMode: "class", theme: { extend: {} } };
</script>
</head>
<body class="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen">
  <!-- Original page content (mindcare_wellness_app) -->
  <div class="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
    <div class="flex flex-col w-full px-margin pb-8 space-y-space-xl">
      <header class="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_12px_rgba(80,90,84,0.05)]">
        <div class="h-16 px-margin flex items-center justify-between">
          <div class="flex items-center gap-space-sm">
            <img alt="MindCare Logo" class="h-8 w-auto object-contain" src="https://example.com/logo.png"/>
            <div class="flex flex-col">
              <span class="font-title-md text-title-md text-on-surface tracking-tight leading-none">MindCare</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant leading-tight">Today</span>
            </div>
          </div>
          <div class="flex items-center gap-space-xs">
            <button class="w-11 h-11 relative flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors"><span class="material-symbols-outlined text-[22px]">notifications</span></button>
            <button class="w-11 h-11 flex items-center justify-center rounded-full p-0.5"><img alt="Profile" class="w-8 h-8 rounded-full object-cover" src="https://example.com/profile.jpg"/></button>
          </div>
        </div>
      </header>
      <!-- Rest of page omitted for brevity -->
    </div>
  </div>
</body>
</html>`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MindcareWellnessApp;

