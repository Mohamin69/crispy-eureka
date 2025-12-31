// Small enhancements for the carousel
document.addEventListener('DOMContentLoaded', function(){
	// If navbar is fixed, add body padding equal to its height to avoid overlap
	(function(){
		var nav = document.querySelector('.navbar.fixed-top');
		if(!nav) return;
		function apply(){
			var h = nav.getBoundingClientRect().height || parseInt(getComputedStyle(nav).height) || 64;
			document.body.style.paddingTop = h + 'px';
			document.body.classList.add('fixed-navbar');
			// set CSS var for nav height too
			document.documentElement.style.setProperty('--nav-height', h + 'px');
		}
		apply();
		window.addEventListener('resize', function(){ apply(); });
	})();
	// Pause carousel on hover for easier reading
	var carouselEl = document.querySelector('#shoesCarousel');
	if(carouselEl){
		carouselEl.addEventListener('mouseenter', function(){
			bootstrap.Carousel.getInstance(carouselEl)?.pause();
		});
		carouselEl.addEventListener('mouseleave', function(){
			bootstrap.Carousel.getInstance(carouselEl)?.cycle();
		});
	}
  
	// Product details modal wiring
	var detailButtons = document.querySelectorAll('.open-details');
	var modalEl = document.getElementById('productModal');
	var bsModal = modalEl ? new bootstrap.Modal(modalEl) : null;
	detailButtons.forEach(function(btn){
		btn.addEventListener('click', function(e){
			e.preventDefault();
			if(!bsModal) return;
			var name = btn.dataset.name || '';
			var price = btn.dataset.price || '';
			var desc = btn.dataset.desc || '';
				var img = btn.dataset.img || '';
				var uses = btn.dataset.uses || '';
				var effects = btn.dataset.effects || '';
				var directions = btn.dataset.directions || '';
				var ingredients = btn.dataset.ingredients || '';
				var size = btn.dataset.size || '';
			var nameEl = document.getElementById('productModalName');
			var priceEl = document.getElementById('productModalPrice');
			var descEl = document.getElementById('productModalDesc');
			var imgEl = document.getElementById('productModalImg');
				var usesEl = document.getElementById('productModalUses');
				var effectsEl = document.getElementById('productModalEffects');
				var directionsEl = document.getElementById('productModalDirections');
				var ingredientsEl = document.getElementById('productModalIngredients');
				var sizeEl = document.getElementById('productModalSize');
			if(nameEl) nameEl.textContent = name;
			if(priceEl) priceEl.textContent = price;
			if(descEl) descEl.textContent = desc;
			if(imgEl && img) imgEl.src = img;
				// populate uses as list (split by |)
				if(usesEl){
					usesEl.innerHTML = '';
					if(uses){
						uses.split('|').forEach(function(u){
							var li = document.createElement('li'); li.textContent = u.trim(); usesEl.appendChild(li);
						});
					}
				}
				if(effectsEl) effectsEl.textContent = effects;
				if(directionsEl) directionsEl.textContent = directions;
				if(ingredientsEl) ingredientsEl.textContent = ingredients;
				if(sizeEl) sizeEl.textContent = size;
			bsModal.show();
		});
	});

	// Auth modal templates and handlers (single Log In button opens combined modal)
	var authBtn = document.getElementById('authBtn');
	var userDropdown = document.getElementById('userDropdown');
	var userMenuLabel = document.getElementById('userMenuLabel');

	function showModal(html){
		var wrapper = document.createElement('div');
		wrapper.innerHTML = html;
		document.body.appendChild(wrapper);
		var modalEl = wrapper.querySelector('.modal');
		var bs = new bootstrap.Modal(modalEl);
		bs.show();
		modalEl.addEventListener('hidden.bs.modal', function(){
			bs.dispose();
			wrapper.remove();
		});
		return wrapper;
	}

	var csrfToken = null;
	var serverAvailable = true;
	// retrieve CSRF token from server
	fetch('csrf.php', {credentials: 'same-origin'}).then(function(r){
		if(!r.ok) throw new Error('CSRF endpoint not OK');
		return r.json();
	}).then(function(j){
		csrfToken = j && j.csrf ? j.csrf : null;
	}).catch(function(err){
		// mark backend as unavailable; helpful for users opening the file directly
		serverAvailable = false;
		console.warn('CSRF fetch failed:', err);
	});

	function apiPost(url, data){
		var headers = {'Content-Type':'application/json'};
		if(csrfToken) headers['X-CSRF-Token'] = csrfToken;
		return fetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: headers,
			body: JSON.stringify(data)
		}).then(r=>r.json());
	}

	function setLoggedIn(email){
		if(userDropdown){
			userDropdown.classList.remove('d-none');
			document.getElementById('signInBtn').classList.add('d-none');
			document.getElementById('signUpBtn').classList.add('d-none');
			userMenuLabel.textContent = email;
		}
	}

	function setLoggedOut(){
		if(userDropdown){
			userDropdown.classList.add('d-none');
			document.getElementById('signInBtn').classList.remove('d-none');
			document.getElementById('signUpBtn').classList.remove('d-none');
			userMenuLabel.textContent = 'User';
		}
	}

		// Single combined auth modal (Log In or Create Account)
		if(authBtn){
				authBtn.addEventListener('click', function(e){
						e.preventDefault();
						var html = `
						<div class="modal fade" tabindex="-1" aria-hidden="true">
							<div class="modal-dialog modal-dialog-centered">
								<div class="modal-content">
									<div class="modal-header">
										<ul class="nav nav-tabs" role="tablist">
											<li class="nav-item"><a class="nav-link active" href="#" id="tabSignIn">Log In</a></li>
											<li class="nav-item"><a class="nav-link" href="#" id="tabSignUp">Create Account</a></li>
										</ul>
										<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
									</div>
									<div class="modal-body">
										<div id="signinWrapper">
											<form id="signinForm">
												<div class="mb-3"><label class="form-label">Email</label><input required name="email" type="email" class="form-control"></div>
												<div class="mb-3"><label class="form-label">Password</label><input required name="password" type="password" class="form-control"></div>
												<div class="text-end"><button class="btn btn-primary" type="submit">Log in</button></div>
											</form>
										</div>
										<div id="signupWrapper" class="d-none">
											<form id="signupForm">
												<div class="mb-3"><label class="form-label">Email</label><input required name="email" type="email" class="form-control"></div>
												<div class="mb-3"><label class="form-label">Password</label><input required name="password" type="password" class="form-control"></div>
												<div class="text-end"><button class="btn btn-success" type="submit">Create account</button></div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>`;
						var wrapper = showModal(html);
						var tabSignIn = wrapper.querySelector('#tabSignIn');
						var tabSignUp = wrapper.querySelector('#tabSignUp');
						var signinWrapper = wrapper.querySelector('#signinWrapper');
						var signupWrapper = wrapper.querySelector('#signupWrapper');

						function showSignIn(){
								tabSignIn.classList.add('active');
								tabSignUp.classList.remove('active');
								signinWrapper.classList.remove('d-none');
								signupWrapper.classList.add('d-none');
						}
						function showSignUp(){
								tabSignUp.classList.add('active');
								tabSignIn.classList.remove('active');
								signupWrapper.classList.remove('d-none');
								signinWrapper.classList.add('d-none');
						}
						tabSignIn.addEventListener('click', function(ev){ev.preventDefault(); showSignIn();});
						tabSignUp.addEventListener('click', function(ev){ev.preventDefault(); showSignUp();});

						// sign in submit
						var signinForm = wrapper.querySelector('#signinForm');
						signinForm.addEventListener('submit', function(ev){
								ev.preventDefault();
								var formData = new FormData(signinForm);
								apiPost('login.php', {email: formData.get('email'), password: formData.get('password')})
								.then(function(res){
										if(res && res.success){
												setLoggedIn(res.email);
												var bs = bootstrap.Modal.getInstance(wrapper.querySelector('.modal'));
												bs.hide();
										} else {
												alert(res && res.message ? res.message : 'Login failed');
										}
								}).catch(function(){alert('Network error');});
						});

						// sign up submit
						var signupForm = wrapper.querySelector('#signupForm');
						signupForm.addEventListener('submit', function(ev){
							ev.preventDefault();
							if(!serverAvailable){
								alert('Unable to reach the PHP backend. Start a local PHP server in the project folder, e.g. run:\n\nphp -S localhost:8000\n\nThen open the site via http://localhost:8000/hamza.html and try again.');
								return;
							}
							var formData = new FormData(signupForm);
							apiPost('register.php', {email: formData.get('email'), password: formData.get('password')})
							.then(function(res){
								if(res && res.success){
									setLoggedIn(res.email);
									var bs = bootstrap.Modal.getInstance(wrapper.querySelector('.modal'));
									bs.hide();
								} else {
									alert(res && res.message ? res.message : 'Registration failed');
								}
							}).catch(function(){alert('Network error');});
						});
				});
		}

	// Logout
	var logoutBtn = document.getElementById('logoutBtn');
	if(logoutBtn){
		logoutBtn.addEventListener('click', function(e){
			e.preventDefault();
			fetch('logout.php', {method:'POST'}).then(()=>{setLoggedOut();});
		});
	}

	// Theme toggle: persist choice in localStorage and apply on load
	var themeBtn = document.getElementById('themeToggleBtn');

	function applyTheme(theme){
		if(theme === 'dark'){
			document.body.classList.add('dark-theme');
			if(themeBtn) themeBtn.textContent = '🌙 Dark';
		} else {
			document.body.classList.remove('dark-theme');
			if(themeBtn) themeBtn.textContent = '☀️ Light';
		}
	}

	// determine starting theme
	var savedTheme = null;
	try{ savedTheme = localStorage.getItem('theme'); }catch(e){}
	if(!savedTheme){
		if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) savedTheme = 'dark';
		else savedTheme = 'light';
	}
	applyTheme(savedTheme);

	if(themeBtn){
		themeBtn.addEventListener('click', function(e){
			e.preventDefault();
			var next = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
			try{ localStorage.setItem('theme', next); }catch(e){}
			applyTheme(next);
		});
	}

});

/* Parallax removed: no scroll-based transforms applied */

// subtle geometric background animation (floating rotating triangles)
document.addEventListener('DOMContentLoaded', function(){
	var canvas = document.getElementById('bgCanvas');
	if(!canvas || !canvas.getContext) return;
	var ctx = canvas.getContext('2d');
	var DPR = window.devicePixelRatio || 1;
	var particles = [];
	var count = Math.max(12, Math.min(80, Math.floor(window.innerWidth / 18)));

	function rand(min,max){ return Math.random()*(max-min)+min; }

	function resize(){
		canvas.style.width = window.innerWidth + 'px';
		canvas.style.height = window.innerHeight + 'px';
		canvas.width = Math.floor(window.innerWidth * DPR);
		canvas.height = Math.floor(window.innerHeight * DPR);
		ctx.setTransform(DPR,0,0,DPR,0,0);
	}

	function hexToRgba(hex, a){
		if(!hex) hex = '#ff6b35';
		hex = hex.trim();
		if(hex[0] === '#') hex = hex.slice(1);
		if(hex.length === 3) hex = hex.split('').map(c=>c+c).join('');
		var r = parseInt(hex.slice(0,2),16);
		var g = parseInt(hex.slice(2,4),16);
		var b = parseInt(hex.slice(4,6),16);
		return 'rgba('+r+','+g+','+b+','+a+')';
	}

	function init(){
		particles = [];
		count = Math.max(12, Math.min(80, Math.floor(window.innerWidth / 18)));
		for(var i=0;i<count;i++){
			particles.push({
				x: rand(0, window.innerWidth),
				y: rand(0, window.innerHeight),
				s: rand(18, (window.innerWidth<600?36:90)),
				vx: rand(-0.35, 0.35),
				vy: rand(-0.25, 0.25),
				rot: rand(0, Math.PI*2),
				vr: rand(-0.008, 0.008),
				a: rand(0.06, 0.35)
			});
		}
	}

	function update(){
		for(var i=0;i<particles.length;i++){
			var p = particles[i];
			p.x += p.vx;
			p.y += p.vy;
			p.rot += p.vr;
			if(p.x < -200) p.x = window.innerWidth + 200;
			if(p.x > window.innerWidth + 200) p.x = -200;
			if(p.y < -200) p.y = window.innerHeight + 200;
			if(p.y > window.innerHeight + 200) p.y = -200;
		}
	}

	function draw(){
		ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
		var brand = getComputedStyle(document.documentElement).getPropertyValue('--brand') || '#ff6b35';
		for(var i=0;i<particles.length;i++){
			var p = particles[i];
			ctx.save();
			ctx.translate(p.x, p.y);
			ctx.rotate(p.rot);
			// soft shadow glow
			ctx.shadowColor = hexToRgba(brand, Math.min(0.9, p.a*1.2));
			ctx.shadowBlur = Math.max(6, p.s / 8);
			ctx.fillStyle = hexToRgba(brand, p.a);
			ctx.beginPath();
			var s = p.s;
			ctx.moveTo(0, -s * 0.6);
			ctx.lineTo(s * 0.55, s * 0.5);
			ctx.lineTo(-s * 0.55, s * 0.5);
			ctx.closePath();
			ctx.fill();
			ctx.shadowBlur = 0;
			ctx.restore();
		}
	}

	function loop(){ update(); draw(); requestAnimationFrame(loop); }

	window.addEventListener('resize', function(){ resize(); init(); });
	resize(); init(); loop();
});

// helper to render icon inside theme button (runs after DOM load)
document.addEventListener('DOMContentLoaded', function(){
	var themeBtn = document.getElementById('themeToggleBtn');
	if(!themeBtn) return;
	function setIcon(theme){
		var sun = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" fill="currentColor"/><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></g></svg>';
		var moon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/></svg>';
		themeBtn.innerHTML = '<span class="icon">' + (theme === 'dark' ? moon : sun) + '</span>';
	}
	// initial icon based on current theme
	var current = (document.body.classList.contains('dark-theme')) ? 'dark' : 'light';
	setIcon(current);

	themeBtn.addEventListener('click', function(){
		themeBtn.classList.add('rotating');
		setTimeout(function(){ themeBtn.classList.remove('rotating'); }, 420);
		// swap icon after small delay to match rotation
		setTimeout(function(){
			var now = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
			setIcon(now);
		}, 200);
	});
});

// Contact form handler: submit via API (CSRF-protected) and show inline alert
document.addEventListener('DOMContentLoaded', function(){
	var contactForm = document.getElementById('contactForm');
	if(!contactForm) return;
	function showAlert(type, text){
		// type: success | danger
		var existing = document.getElementById('contactAlert');
		if(existing) existing.remove();
		var div = document.createElement('div');
		div.id = 'contactAlert';
		div.className = 'alert alert-' + (type === 'success' ? 'success' : 'danger') + ' alert-dismissible fade show';
		div.role = 'alert';
		div.innerHTML = text + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
		contactForm.parentNode.insertBefore(div, contactForm);
	}

	contactForm.addEventListener('submit', function(ev){
		ev.preventDefault();
		var form = new FormData(contactForm);
		var payload = {
			name: form.get('name') || '',
			email: form.get('email') || '',
			phone: form.get('phone') || '',
			message: form.get('message') || ''
		};
		// basic client-side validation
		if(!payload.name || !payload.email || !payload.message){
			showAlert('danger', 'Please provide your name, email and message.');
			return;
		}
		apiPost('contact.php', payload).then(function(res){
			if(res && res.success){
				showAlert('success', res.message || 'Message sent.');
				contactForm.reset();
			} else {
				showAlert('danger', (res && res.message) ? res.message : 'Failed to send message.');
			}
		}).catch(function(){ showAlert('danger', 'Network error. Please try again.'); });
	});
});
