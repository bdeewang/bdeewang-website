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
        text: "Hey! I’m **Deewang Bhamidipati**, a 6th year PhD candidate in mathematics at <a href='https://www.math.ucsc.edu/index.html'>UC Santa Cruz</a>. My first name is pronounced as *dee-waang*. My advisor is <a href='http://martyweissman.com/'>Martin Weissman</a>.<br><br> ***I am on the job market in Fall 2024!***",
        image: {
            src: '/deewang-smile.jpg',
            alt: 'a person smiling'
        },
        actions: [
            {
                text: 'Bhamidipati CV',
                href: 'https://drive.google.com/file/d/14Qb6_G7CEKUkhOUEwx68559Rs1BCa74S/view?usp=sharing'
            },
            {
                text: 'CV (Dark Mode)',
                href: 'https://drive.google.com/file/d/1GouDYn-Efseih_NrD5z3LmwOvmtSlqt_/view?usp=sharing'
            }
        ]
    },
};

export default siteConfig;
