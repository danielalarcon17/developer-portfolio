export interface Experience {
	date: string;
	title: string;
	description: string;
	tags: string[];
}

export const EXPERIENCES: Experience[] = [
	{
		date: 'Jun 2022 - PRESENT',
		title: 'Front-end Engineer',
		description: 'Delivering a rich front-end and user experience through clear and refined interfaces, functionality that empowers our customers through our powerful no-code development platform to build robust applications easily',
		tags: [
			'JavaScript',
			'Typescript',
			'React',
			'Redux',
			'Redux-Saga',
			'Html 5',
			'Css 3',
			'Sass',
			'NX',
			'Jest',
			'Cypress',
			'Webpack',
			'Git',
		]
	},
	{
		date: 'Dec 2020 - May 2022',
		title: 'Software Engineer',
		description: `Architecture Department. Develop and maintain framework used to build +300 applications. Plan and design architecture to migrate application from monolithic to microservices and independent front-end in a Node npm project. Design and development of mobile platform to run our applications in mobile devices (android and ios)`,
		tags: [
			'JavaScript',
			'React',
			'Sencha Ext-Js',
			'Html 5',
			'Css 3',
			'Jest',
			'Selenium',
			'Webpack',
			'Node Js',
			'Ionic',
			'Git',
		]
	},
	{
		date: 'Mar 2019 - Nov 2020',
		title: 'Full Stack Developer',
		description: `Working on a full software solution for the digital transformation, management and security of the pharmacy stores. Implement new features to meet new regulations. Offering solutions to pharmacies for their work activities`,
		tags: [
			'JavaScript',
			'Angular',
			'Sencha Ext-Js',
			'Html 5',
			'Css 3',
			'Java',
			'Spring',
			'SQL',
			'Hibernate',
			'Subvsersion SVN',
		]
	}
]