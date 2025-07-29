<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>☬SHENbot™</title>
    <style>
        :root { --accent-color: #00e5ff; --status-color: #8a8a8a; }
        body, html { margin: 0; padding: 0; height: 100%; width: 100%; display: flex; justify-content: center; align-items: center; background-color: #1a1a1a; overflow: hidden; font-family: system-ui, sans-serif; -webkit-user-select: none; -ms-user-select: none; user-select: none; }
        .container { display: flex; flex-direction: column; align-items: center; gap: 2rem; }
        .robot-frame { width: 300px; height: 300px; background: linear-gradient(145deg, #2a2a2a, #1a1a1a); border-radius: 60px; box-shadow: 15px 15px 40px #111111, -15px -15px 40px #232323; display: flex; align-items: center; justify-content: center; }
        #faceCanvas { transform: scale(1); }
        #statusText { color: var(--status-color); font-size: 1.2rem; height: 30px; transition: color 0.3s; }
        #orientation-blocker { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #1a1a1a; color: #fff; z-index: 9999; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        @media (orientation: landscape), (min-width: 600px) { #orientation-blocker { display: flex; } .container { display: none; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="robot-frame">
            <canvas id="faceCanvas" width="300" height="300"></canvas>
        </div>
        <div id="statusText">برای شروع نازم کن...</div>
    </div>
    <div id="orientation-blocker">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
        <p style="margin-top: 1rem;">فقط موبایل، فقط عمودی!</p>
    </div>
    <script src="Core.js"></script>
</body>
</html>
