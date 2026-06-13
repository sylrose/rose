document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
    <ul>  <li><a href="index.html">Home <span style="font-family:EmojiFont;">g
  </span>
</a>
      <li><a href="writings.html">Writings+
</a></li>
      <li><a href="blog.html">Blog
</a></li>

      <li><a href="books.html">Books       
</a></li>
      <li><a href="politics.html">Politics
      </a></li>
      <li><a href="music.html">Music
</a></li>
      <li><a href="illust.html">Illust             
</a></li>
      <li><a href="photos.html">Photos</a></li>
      <li><a href="fandom.html">Fandom</a></li>
      <li><a href="world.html">World</a></li>
  </ul>`;

  document.getElementById("navbar").innerHTML = navbar;
});