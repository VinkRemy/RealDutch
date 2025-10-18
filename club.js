<ul id="members">
  <li>Laden...</li>
</ul>

<script>
(async () => {
  const list = document.getElementById('members');
  list.innerHTML = "<li>Laden...</li>";

  try {
    // Dit is een proxy via GitHub Pages: de fetch naar je VPS gaat via je serverless proxy
    // Voor nu gebruiken we jouw VPS endpoint direct via HTTPS (als je die later hebt)
    const res = await fetch('https://65.21.58.192/api/club?tag=%232RY829PPO');
    const data = await res.json();

    list.innerHTML = "";
    data.items.forEach(member => {
      const li = document.createElement('li');
      li.textContent = `${member.name} - main: ${member.name}`; // hier kun je later mini info toevoegen
      list.appendChild(li);
    });
  } catch(err) {
    list.innerHTML = `<li>Fout bij ophalen: ${err.message}</li>`;
  }
})();
</script>
