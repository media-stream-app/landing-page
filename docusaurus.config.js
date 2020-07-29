module.exports = {
	title: "Media Stream",
	tagline: "Setup live streaming in minutes",
	url: "https://media-stream.app",
	baseUrl: "/",
	favicon: "img/video.svg",
	organizationName: "media-stream-app", // Usually your GitHub org/user name.
	projectName: "landing-page", // Usually your repo name.
	themeConfig: {
		colorMode: {
			disableSwitch: true,
		},
		navbar: {
			title: "Media Stream",
			logo: {
				alt: "media-stream-logo",
				src: "img/video.svg",
			},
			items: [
				{
					to: "docs",
					activeBasePath: "docs",
					label: "Docs",
					position: "right",
				},
				// { to: "blog", label: "Blog", position: "left" },
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
				// 	// Please change this to your repo.
				// 	editUrl:
				// 		"https://github.com/facebook/docusaurus/edit/master/website/",
				// },
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
				},
				blog: {
					showReadingTime: false,
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	onBrokenLinks: "log",
};
