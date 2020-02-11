	<!-- FOOTER -->
	<footer>
		<div id="footer">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-12 col-sm-6">
						<svg><use class="svg-nav nav-blue" xlink:href="#logo-footer"></use></svg>
						<p>Solusi baru belajar bahasa Inggris berbasis aplikasi yang efektif, fleksibel dan nyaman untuk kamu yang punya gaya hidup aktif dan mobil</p>
					</div>
					
					<div class="col-lg-2 col-md-4 col-sm-6">
            <h5 style="visibility: hidden;">other page</h5>
						<a href="https://nexgenenglishonline.co/" target="_blank"><p>Our Company</p></a>
						<a href="https://myneo.space/privacy-policy" target="_blank"><p>Privacy Policy</p></a>
						<a href="https://myneo.space/terms&conditions" target="_blank"><p>Terms &amp; Conditions</p></a>
					</div>
					
					<div class="col-lg-3 col-md-4 col-sm-6 socmed-link">
						<h5>social media</h5>
						<a href="https://instagram.com/nexgen.neo" target="_blank"><img src="assets/img/ig.svg"/></a>
						<a href="https://facebook.com/nexgen.neo" target="_blank"><img src="assets/img/fb.svg"/></a>
						<a href="https://line.me/R/ti/p/@nexgen.neo"><img src="assets/img/line.svg"/></a>
						<a href="https://www.youtube.com/channel/UCj7_h3PDPZnGvn3NK2zXFnA" target="_blank"><img src="assets/img/yt.svg"/></a>
					</div>
					
					<div class="col-lg-4 col-md-4 col-sm-6">
						<h5>payment</h5>
						<img src="assets/img/payment1.webp"/>
						<img src="assets/img/payment2.webp"/>
						<img src="assets/img/payment7.webp"/>
					</div>
				</div>
			</div>
				
      <div class="container"><p class="copyright">Copyright &copy; <span id="year"></span>. All Right Reserved.</p></div>
		</div><!-- footer -->
	</footer><!-- FOOTER -->

	<div class="modal fade" id="youtube" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="vertical-alignment-helper">
			<div class="modal-dialog vertical-align-center" role="document">
				<div class="modal-content">
					<div class="videoWrapper"><iframe width="560" height="315" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
				</div>
			</div>
		</div>
	</div>
	
	<a href="#0" class="cd-top cd-is-visible"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
	
	<!-- jQUERY -->
	<script src="assets/plugins/jquery/jquery-2.2.0.min.js"></script>
	
	<!-- BOOTSTRAP JS -->
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
	
	<!-- CUSTOM JS -->
	<script src="assets/js/custom.js"></script>
	
	<!-- OWL -->
	<script src="assets/js/owl.carousel.min.js"></script>
	
	
          <script>
            $(document).ready(function() {
              var owl = $('.owl-carousel.owl-carousel1');
              owl.owlCarousel({
				animateOut: 'fadeOut',
                margin: 0,
				lazyLoad:true,
                loop: true,
				autoplay:true,
				autoplayTimeout:6000,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                  1000: {
                    items: 1
                  }
                }
              });
			  
              var owl = $('.owl-carousel.owl-carousel2');
              owl.owlCarousel({
                margin: 0,
                loop: true,
				autoplay:true,
				autoplayTimeout:7000,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                  1000: {
                    items: 1
                  }
                }
              });
			  
              var owl = $('.owl-carousel.owl-carousel3');
              owl.owlCarousel({
                margin: 0,
                loop: true,
				autoplay:true,
				autoplayTimeout:4000,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                  1000: {
                    items: 1
                  }
                }
              });
			  
              var owl = $('.owl-carousel.owl-carousel4');
              owl.owlCarousel({
                margin: 0,
                loop: true,
				autoplay:true,
				autoplayTimeout:4000,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                  1000: {
                    items: 1
                  }
                }
              });
            })
          </script>
		  
		   <script>
            $(document).ready(function() {
              var owl = $('.owl-carousel.owl-carousel3');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 2
                  },
                  600: {
                    items: 6
                  },
                  1000: {
                    items: 8
                  }
                }
              })
            })
          </script>
      <script>
          document.getElementById("year").innerHTML = new Date().getFullYear();
      </script>	 
</body>
	
</html>
