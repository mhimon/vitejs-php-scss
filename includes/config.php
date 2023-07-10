<?php

define( 'VPHP_VITE_DEV_SERVER', 'http://localhost:8091' ); // Need to change the PORT if you change it in vite.config.js
define( 'VPHP_VITE_ENTRY_POINT', 'app.js' );
define( 'VPHP_VITE_DEV', true );
define( 'VPHP_ROOT_PATH', dirname( __DIR__ ) . '/' );
define( 'VPHP_ROOT_URL', ( isset( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http' ) . '://' . $_SERVER['HTTP_HOST'] . '/' );
