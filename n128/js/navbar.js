document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
      <li><a href="index.html">Home <span style="font-family:EmojiFont;">g
  </span>
</a>
      <li><a href="writings.html">Writings+
</a>
      <li><a href="blog.html">Blog
</a>

      <li><a href="books.html">Books       
</a>
      <li><a href="politics.html">Politics

      </a>
      <li><a href="music.html">Music
</a>
      <li><a href="illust.html">Illust             
</a>
      <li><a href="photos.html">Photos</a>
      <li><a href="fandom.html">Fandom</a>
      <li><a href="world.html">World</a>
  `;

  document.getElementById("navbar").innerHTML = navbar;
});