import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";
const { resolve } = require("path");
const fs = require("fs");

export default defineConfig({
	plugins: [liveReload(__dirname + "/**/*.php")],

	// config
	root: "",
	base: process.env.NODE_ENV === "development" ? "/" : "/dist/",

	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},

	build: {
		outDir: resolve(__dirname, "./dist"),
		emptyOutDir: true,

		manifest: false,

		target: "es2018",

		rollupOptions: {
			input: {
				main: resolve(__dirname + "/app.js"),
			},

			output: {
				chunkFileNames: "js/[name].js",
				entryFileNames: "js/[name].js",

				globals: {
					jquery: "window.jQuery",
				},

				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
						return "images/[name][extname]";
					}

					if (/\.css$/.test(name ?? "")) {
						return "css/[name][extname]";
					}

					// Fonts woff, woff2, eot, ttf
					if (/\.(woff|woff2|eot|ttf)$/.test(name ?? "")) {
						return "fonts/[name][extname]";
					}

					// default value
					// ref: https://rollupjs.org/guide/en/#outputassetfilenames
					return "[name][extname]";
				},
			},
		},

		// minifying switch
		minify: true,
		write: true,
	},

	server: {
		cors: true,
		strictPort: true,
		port: 8091,
		https: false,
		hmr: {
			host: "localhost",
		},
	},
});
