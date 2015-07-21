# jQuery PHP Contact Form

jquery.min.js in "js" map.
contact.matijs.js in "js" map.
submitcontact.php in "php" map.

<head></head>:
```
<script src="js/jquery.min.js"></script>
<script src="js/contact.matijs.js"></script>
```

<form></form>:
```
<!-- Contact Form -->
<form method="post" id="contactform">
	<div class="row 50%">
		<div class="6u"><input type="text" id="name" name="name" placeholder="Naam" /></div>
		<div class="6u"><input type="email" id="email" name="email" placeholder="Email" /></div>
	</div>
	<div class="row 50%">
		<div class="12u"><textarea name="message" id="message" placeholder="Bericht" rows="6"></textarea></div>
	</div>
	<div class="row">
		<div class="12u">
			<ul class="actions">
				<li><input type="submit" value="Verstuur!" /></li>
			</ul>
		</div>
	</div>
</form>
```

Boven <form></form>:
```
<div class="alert alert-danger" id='formalert' style='display: none' role="alert"><strong>Oeps!</strong> <span></span></div>
<div class="alert alert-success" id='formsuccess' style='display: none' role="alert"><strong>Hoera!</strong> <span></span></div>
```