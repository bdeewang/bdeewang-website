export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Deewang Bhamidipati',
    subtitle: 'Graduate Student in Mathematics, UC Santa Cruz',
    description: 'Deewang Bhamidipati - Professional Website',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Research',
            href: '/projects'
        },
        {
            text: 'Teaching',
            href: '/blog'
        },
        {
            text: 'Activities',
            href: '/tags'
        }
    ],
    socialLinks: [
        {
            text: 'UCSC Math Department',
            href: 'https://www.math.ucsc.edu/index.html'
        }
    ],
    hero: {
        text: "I'm **Deewang Bhamidipati**, a sixth-year PhD student in Mathematics.",
        image: {
            src: '/deewang-smile.jpg',
            alt: 'a person smiling'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
};

export default siteConfig;
