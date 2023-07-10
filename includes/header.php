<?php
require_once 'includes/config.php';
$title = 'Home';

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo $title; ?></title>
	<?php
	if ( VPHP_VITE_DEV ) {
		?>
		<script type="module" src="<?php echo VPHP_VITE_DEV_SERVER; ?>/<?php echo VPHP_VITE_ENTRY_POINT; ?>"></script>
		<?php
	} else {
		?>
		<link rel="stylesheet" href="<?php echo VPHP_ROOT_URL; ?>/dist/css/app.css">
		<script src="<?php echo VPHP_ROOT_URL; ?>/dist/js/main.js"></script>
		<?php
	}
	?>
</head>
<body>
	<header>
		<h1><?php echo $title; ?></h1>
	</header>
