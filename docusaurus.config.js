module.exports = {
	title: "Media Stream",
	tagline: "Setup live streaming in minutes",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	favicon: "img/video.svg",
	organizationName: "media-stream-app", // Usually your GitHub org/user name.
	projectName: "landing-page", // Usually your repo name.
	themeConfig: {
		disableDarkMode: true,
		navbar: {
			title: "Media Stream",
			logo: {
				alt: "media-stream-logo",
				src: "img/video.svg",
			},
			links: [
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "Docs",
					position: "left",
				},
				{ to: "blog", label: "Blog", position: "left" },
			],
		},
		footer: {
			style: "dark",
			// links: [
			// 	{
			// 		title: "Docs",
			// 		items: [
			// 			{
			// 				label: "Style Guide",
			// 				to: "docs/",
			// 			},
			// 			{
			// 				label: "Second Doc",
			// 				to: "docs/doc2/",
			// 			},
			// 		],
			// 	},
			// 	{
			// 		title: "Community",
			// 		items: [
			// 			{
			// 				label: "Stack Overflow",
			// 				href: "https://stackoverflow.com/questions/tagged/docusaurus",
			// 			},
			// 			{
			// 				label: "Discord",
			// 				href: "https://discordapp.com/invite/docusaurus",
			// 			},
			// 			{
			// 				label: "Twitter",
			// 				href: "https://twitter.com/docusaurus",
			// 			},
			// 		],
			// 	},
			// 	{
			// 		title: "More",
			// 		items: [
			// 			{
			// 				label: "Blog",
			// 				to: "blog",
			// 			},
			// 			{
			// 				label: "GitHub",
			// 				href: "https://github.com/facebook/docusaurus",
			// 			},
			// 		],
			// 	},
			// ],
			copyright: `Made for people in a hurry. RTFM.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				// docs: {
				// 	// It is recommended to set document id as docs home page (`docs/` path).
				// 	homePageId: "doc1",
				// 	sidebarPath: require.resolve("./sidebars.js"),
				// 	// Please change this to your repo.
				// 	editUrl:
				// 		"https://github.com/facebook/docusaurus/edit/master/website/",
				// },
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
