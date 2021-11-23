import './Footer.css';
import 'boxicons/css/boxicons.min.css';

function Footer(){
  return(
    <footer class="footer" id="contacto">
    <div class="contenedor footer-content">
      <div class="contact-us">
        <h2 class="brand">Arigato!</h2>
        <p>Find your favorite animes on here and enjoy.</p>
      </div>
      <div class="social-media">
        <a href="./" class="social-media-icon">
          <i class='bx bxl-facebook'></i>
        </a>
        <a href="./" class="social-media-icon">
          <i class='bx bxl-twitter'></i>
        </a>
        <a href="./" class="social-media-icon">
          <i class='bx bxl-instagram'></i>
        </a>
      </div>
    </div>
    <div class="line"></div>
  </footer>
  );
}

export default Footer;