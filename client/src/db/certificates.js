import factoryObjectsDB from "./factoryObjectsDB";

const certificates = [
	{
		name: "UI/UX Design",
		category: "Design",
		list: [
			{
				name: "UI/UX Design Essential",
				href: new URL(
					`../documents/certificates/TP10044539.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "UI/UX Design Starter",
				href: new URL(
					`../documents/certificates/TP11251734.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "UI/UX mobile App Design",
				href: new URL(
					`../documents/certificates/TP79487888.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "Figma - Online Store Design",
				href: new URL(
					`../documents/certificates/TP44664130.pdf`,
					import.meta.url
				).href,
			},
		],
	},
	{
		name: "React",
		category: "JS framework",
		list: [
			{
				name: "React Full course",
				href: new URL(
					`../documents/certificates/react-course.pdf`,
					import.meta.url
				).href,
			},
		],
	},
	{
		name: "Angular",
		category: "JS framework",
		list: [
			{
				name: "Angular Essential",
				href: new URL(
					`../documents/certificates/TP58962405.pdf`,
					import.meta.url
				).href,
			},
		],
	},

	{
		name: "Python",
		category: "Language",
		list: [
			{
				name: "PCAP: Programming Essentials in Python",
				href: new URL(
					`../documents/certificates/cisco/EvgenyErmolenko-Python-20IVT7-certificate (1).pdf`,
					import.meta.url
				).href,
			},
		],
	},
	{
		name: "Cisco",
		category: "Network technologies",
		list: [
			{
				name: "Introduction to Networks",
				href: new URL(
					`../documents/certificates/cisco/EvgenyErmolenko-CCNA-1v7-20IVT4-certificate.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "Switching, Routing, and Wireless Essentials (SRWE)",
				href: new URL(
					`../documents/certificates/cisco/EvgenyErmolenko-CCNA-SRWE-21IVT4-certificate.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "Introduction to Packet Tracer",
				href: new URL(
					`../documents/certificates/cisco/EvgenyErmolenko-Introduction to -certificate (2).pdf`,
					import.meta.url
				).href,
			},
		],
	},
];

export default factoryObjectsDB(certificates, 100);
