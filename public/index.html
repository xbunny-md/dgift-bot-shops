<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DGIFT Bot Store</title>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    body {
      background: #0f172a;
      color: #e2e8f0;
      padding-bottom: 80px;
    }
    header {
      background: #1e293b;
      padding: 20px;
      text-align: center;
      position: sticky;
      top: 0;
      z-index: 10;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
    header h1 {
      font-size: 24px;
      color: #38bdf8;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    @media (min-width: 768px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .card {
      background: #1e293b;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-content {
      padding: 20px;
    }
    .card h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #f8fafc;
    }
    .badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .badge-available {
      background: #166534;
      color: #4ade80;
    }
    .buy-btn {
      width: 100%;
      padding: 14px;
      background: #38bdf8;
      color: #0f172a;
      border: none;
      border-radius: 10px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: 0.2s;
    }
    .buy-btn:hover {
      background: #0ea5e9;
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      z-index: 100;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal.active {
      display: flex;
    }
    .modal-content {
      background: #1e293b;
      padding: 30px;
      border-radius: 16px;
      max-width: 500px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
    }
    .modal h2 {
      margin-bottom: 20px;
      color: #38bdf8;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .payment-box {
      background: #334155;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
    }
    .payment-box p {
      margin: 8px 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .key-input {
      width: 100%;
      padding: 14px;
      background: #334155;
      border: 2px solid #475569;
      border-radius: 10px;
      color: #e2e8f0;
      font-size: 16px;
      margin: 15px 0;
    }
    .key-input:focus {
      outline: none;
      border-color: #38bdf8;
    }
    .close-btn {
      background: #475569;
      color: #e2e8f0;
      padding: 12px;
      border: none;
      border-radius: 10px;
      width: 100%;
      margin-top: 10px;
      cursor: pointer;
    }
    .loading {
      text-align: center;
      padding: 40px;
      color: #94a3b8;
    }
    .empty {
      text-align: center;
      padding: 60px 20px;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <header>
    <h1><i data-lucide="bot"></i> DGIFT Bot Store</h1>
  </header>

  <div class="container">
    <div id="loading" class="loading">
      <i data-lucide="loader-circle"></i> Loading bots...
    </div>
    <div id="grid" class="grid" style="display:none;"></div>
    <div id="empty" class="empty" style="display:none;">
      <i data-lucide="package-x" style="width:48px;height:48px;margin-bottom:10px;"></i>
      <p>No bots available right now</p>
    </div>
  </div>

  <div id="modal" class="modal">
    <div class="modal-content">
      <h2><i data-lucide="shopping-cart"></i> Buy Bot</h2>
      <div class="payment-box">
        <p><i data-lucide="phone"></i> <strong>Pay to:</strong> 255780470905</p>
        <p><i data-lucide="user"></i> <strong>Name:</strong> LIGHTNESS REGINALD</p>
        <p><i data-lucide="smartphone"></i> <strong>Method:</strong> M-Pesa / Airtel Money / Mini Pay App</p>
        <p><i data-lucide="info"></i> Send payment manually, then enter your secret key below</p>
      </div>
      
      <input type="text" id="secretKey" class="key-input" placeholder="Enter your secret key here">
      <button class="buy-btn" onclick="activateBot()">
        <i data-lucide="key"></i> Activate Bot
      </button>
      <button class="close-btn" onclick="closeModal()">Close</button>
    </div>
  </div>

  <script>
    lucide.createIcons();
    let selectedBot = null;

    async function loadBots() {
      const res = await fetch('/api/bots')
      const result = await res.json()
      
      document.getElementById('loading').style.display = 'none'
      
      if (!result.bots || result.bots.length === 0) {
        document.getElementById('empty').style.display = 'block'
        return
      }

      document.getElementById('grid').style.display = 'grid'
      const grid = document.getElementById('grid')
      
      result.bots.forEach(bot => {
        grid.innerHTML += `
          <div class="card">
            <img src="${bot.image_url || 'https://via.placeholder.com/400x200/1e293b/38bdf8?text=Bot'}" alt="${bot.bot_name}">
            <div class="card-content">
              <h3>${bot.bot_name}</h3>
              <span class="badge badge-available">Available</span>
              <button class="buy-btn" onclick="openModal('${bot.id}')">
                <i data-lucide="shopping-cart"></i> Buy Now
              </button>
            </div>
          </div>
        `
      })
      lucide.createIcons()
    }

    function openModal(botId) {
      selectedBot = botId
      document.getElementById('modal').classList.add('active')
    }

    function closeModal() {
      document.getElementById('modal').classList.remove('active')
      document.getElementById('secretKey').value = ''
    }

    async function activateBot() {
      const key = document.getElementById('secretKey').value
      if (!key) {
        alert('Please enter your secret key')
        return
      }
      alert('Key submitted! We will verify payment and activate your bot. Check your WhatsApp.')
      closeModal()
    }

    loadBots()
  </script>
</body>
</html>