// navbar.js — injects shared navbar and footer into every page
(function () {
  // ---- NAVBAR ----
  const navbarHTML = `
  <header id="bar">
    <div class="dropdown">
      <button class="dropbtn" id="dropbtn">
        <img src="https://images.icc-cricket.com/image/private/s--YX69AZv1--/v1758605726/prd/assets/app-nav-dropdown/default-icc-logo.png"
          style="width:20px;height:20px;margin-right:5px" />
        ICC Events <span id="icon">▼</span>
      </button>
      <div class="dropdown-content" id="dropdownContent">
        <a href="https://www.icc-cricket.com" target="_blank">
          <img src="https://images.icc-cricket.com/image/private/s--YX69AZv1--/v1758605726/prd/assets/app-nav-dropdown/default-icc-logo.png" alt="" />
          ICC Home ▶
        </a>
        <hr/>
        <a href="https://www.icc-cricket.com/tournaments/womens-cricket-world-cup" target="_blank">
          <img src="https://images.icc-cricket.com/image/private/s--KIeQ_mG4--/v1758004253/prd/assets/app-nav-dropdown/w-cwc-2025-icon.png" alt="" />
          ICC Women's Cricket World Cup 2026 ▶
        </a>
        <hr/>
        <a href="https://www.icc-cricket.com/tournaments/icc-mens-t20-world-cup" target="_blank">
          <img src="m-t20-2026-icon (6).svg" alt="" style="width:24px;height:24px" onerror="this.src='https://images.icc-cricket.com/image/private/s--YX69AZv1--/v1758605726/prd/assets/app-nav-dropdown/default-icc-logo.png'"/>
          ICC Men's T20 World Cup 2026 ▶
        </a>
        <hr/>
        <a href="https://www.icc-cricket.com/tournaments/womens-t20-world-cup" target="_blank">
          <img src="https://images.icc-cricket.com/image/private/s--tk0Z8S-s--/v1758004667/prd/assets/app-nav-dropdown/w-t20wc-2026-icon.png" alt="" />
          ICC Women's T20 World Cup 2026 ▶
        </a>
        <hr/>
        <a href="https://www.icc-cricket.com/tournaments/world-test-championship" target="_blank">
          <img src="https://images.icc-cricket.com/image/private/s--fzcZfncW--/v1758003928/prd/assets/app-nav-dropdown/wtc-icon.png" alt="" />
          ICC World Test Championship 2025-27 ▶
        </a>
        <hr/>
        <a href="https://www.icc-cricket.com/tournaments/champions-trophy" target="_blank">
          <img src="https://images.icc-cricket.com/image/private/s--6SstyD6r--/v1758004346/prd/assets/app-nav-dropdown/champs-2025-icon.png" alt="" />
          ICC Champions Trophy 2025 ▶
        </a>
        <hr/>
        <a href="https://www.icc-cricket.com/tournaments/u19-womens-t20-world-cup" target="_blank">
          <img src="https://images.icc-cricket.com/image/private/s--8GRWH3nd--/v1758004901/prd/assets/app-nav-dropdown/u19-w-t20wc-2025.png" alt="" />
          ICC Women's U19 Cricket World Cup 2024 ▶
        </a>
        <hr/>
        <a href="https://www.icc-cricket.com/tournaments/icc-mens-t20-world-cup-2024" target="_blank">
          <img src="m-t20-2024-icon.svg" style="width:60px;height:40px" alt="" onerror="this.src='https://images.icc-cricket.com/image/private/s--YX69AZv1--/v1758605726/prd/assets/app-nav-dropdown/default-icc-logo.png'"/>
          ICC Men's T20 World Cup 2024 ▶
        </a>
        <hr/>
        <a href="https://www.icc-cricket.com" target="_blank" id="more">
          (To know more about events visit official ICC website…)
        </a>
      </div>
    </div>

    <a href="Mini-Project.html" class="nav-link"><button class="btn-nav">Home</button></a>
    <a href="News.html" class="nav-link"><button class="btn-nav">News</button></a>
    <a href="Fixtures.html" class="nav-link"><button class="btn-nav">Fixtures</button></a>
    <a href="Ranking.html" class="nav-link"><button class="btn-nav">Rankings</button></a>
    <a href="Teams.html" class="nav-link"><button class="btn-nav">Teams</button></a>
    <a href="Search.html" class="nav-link" id="search-link"><button class="btn-nav">SEARCH</button></a>
    <span class="nav-sep">|</span>
    <a href="Signin.html" class="nav-link"><button class="btn-nav">SIGN IN</button></a>
    <span class="nav-sep">|</span>
    <a href="help.html" class="nav-link"><button class="btn-nav">HELP</button></a>
  </header>`;

  // ---- FOOTER ----
  const footerHTML = `
  <footer>
    <div class="footer-content">
      <h3>Our Sponsors</h3>
      <ul>
        <li>🏏 Cricket World</li>
        <li>🎥 Sports Live</li>
        <li>🏆 Champion Gear</li>
        <li>📺 Match Highlights</li>
      </ul>
    </div>
  </footer>`;

  // Inject navbar before first child of body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Inject footer at end of body (unless a footer already exists with content)
  if (!document.querySelector('footer')) {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  } else {
    // Replace footer content with standardised version
    document.querySelector('footer').outerHTML = footerHTML;
  }

  // Wire up dropdown toggle
  const icon = document.getElementById('icon');
  const dropdownContent = document.getElementById('dropdownContent');
  const dropbtn = document.getElementById('dropbtn');

  dropbtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
    icon.textContent = dropdownContent.classList.contains('show') ? '▲' : '▼';
  });

  document.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
    icon.textContent = '▼';
  });
})();
