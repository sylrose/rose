document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
    <ul>  <li><a href="index.html">Home <span style="font-family:EmojiFont;">g
  </span>
</a>
            <li><a href="creations.html">Creations<span style="font-family:EmojiFont;">j</span></a></li>
            <li><a href="media.html">Media<span style="font-family:EmojiFont;">o</span></a></li>
            <li><a href="about.html">Webmistress</a></li>
            <li><a href="blog.html">Blog</a></li>
      <li><a href="politics.html">Politics </a></li>
  </ul>
  `;

  document.getElementById("navbar").innerHTML = navbar;
});