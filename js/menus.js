
const site_main_menu=`
<br><br>
<ul>
<li><a>&nbsp;</a></li>
<li><a href="index.html">HOME</a></li>
<li><a href="about.html">ABOUT ASHLYN</a></li>
<li><a href="support.html">SUPPORT ASHLYN</a></li>
<li><a>&nbsp;</a></li>
</ul>
`;

const main_menu=document.getElementById('main_menu');
main_menu.innerHTML=site_main_menu;

const site_social_menu=`
<br><br>
<a href="https://x.com/Ashlyn4Mayor"  target="_blank">
<span class="social_icons" title="Follow on Twitter!">${icons.twitter_x}</span></a>
<a href="https://www.facebook.com/share/xsGUASPPAAh5ve7x/?mibextid=LQQJ4d"  target="_blank">
<span class="social_icons" title="Follow on Facebook!">${icons.facebook}</span></a>
<a title="Coming Soon!" onclick="alert('Coming Soon!')"><span class="social_icons">${icons.instagram}</span></a>
<a href="mailto:ashlynguinnformayor@gmail.com" title="Email Ashlyn"  target="_blank">
<span class="social_icons">${icons.email}</span>
</a>
`;

const social_menu=document.getElementById('social_menu');
social_menu.innerHTML=site_social_menu;
