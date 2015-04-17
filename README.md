# muwin_lightbox
A jquery plugin,simple light box

1.import plugin file<lightbox.js> in your folder
     <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>/*JQUERY CDN*/
     <script src='js/lightbox.js'></script>/*plugin*/

2.example : a img link is
  <a href='http://i.imgur.com/unktDCh.gif>
      tree1
  </a>
  
3.add ID lightbox like this
  <a href='http://i.imgur.com/unktDCh.gif' id='lightbox'>
      tree1
    </a>

4.SET script
  <script>
    $(function(){
	    $('#lightbox').my_lightbox();
    });
   </script>
