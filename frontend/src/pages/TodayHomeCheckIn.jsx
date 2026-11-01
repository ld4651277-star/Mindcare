import React from 'react';

const TodayHomeCheckIn = () => {
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
  <!-- Original page content (today_home_check_in) -->
  <div class="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
    <div class="flex flex-col w-full px-margin pb-8 space-y-space-xl">
      <!-- Content omitted for brevity -->
    </div>
  </div>
</body>
</html>`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default TodayHomeCheckIn;

