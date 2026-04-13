document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
      <li><a href="index.html">Home <span style="font-family:EmojiFont;">g
  </span>
</a>
      <li><a href="link.html">Writings
</a>
      <li><a href="link.html">Books       
</a>
      <li><a href="sample.html">Politics

      </a>
      <li><a href="sample02.html">Music
</a>
      <li><a href="sample02.html">Illust             
</a>
      <li><a href="sample02.html">Photos</a>
      <li><a href="sample02.html">Fandom</a>
      <li><a href="sample02.html">World</a>
  `;

  document.getElementById("navbar").innerHTML = navbar;
});