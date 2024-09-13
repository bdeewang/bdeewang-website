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
    text2?: string;
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
        text: "Hey! I am **Deewang Bhamidipati** (pronounced as *dee-waang*), a 6th year PhD candidate in mathematics at <a href='https://www.math.ucsc.edu/index.html'>UC Santa Cruz</a>, working with <a href='http://martyweissman.com/'>Martin Weissman</a>. My main fields of interest are Arithmetic Geometry and Algebraic Number Theory, and Undergraduate and Graduate Mathematics Education.<br> <em "bg-muted">**I am on the job market in Fall 2024!**</em><br><br> Originally from India, I hold an M.S. in Mathematics from the <a href='https://math.hse.ru/en/'>Higher School of Economics</a> in Moscow, where I wrote my <a href='https://www.hse.ru/en/edu/vkr/296285338'>master’s thesis</a> under <a href='https://www.hse.ru/en/org/persons/160474191'>Vadim Vologodsky</a>, and a B.S. in Mathematics with a specialization in applied algebra from <a href='https://math.snu.edu.in/'>Shiv Nadar University</a> in India.<br><br> <a href='mailto:bdeewang@ucsc.edu'>Email</a> is the best way to get in touch with me.",
        text2: "Originally from India, I hold an M.S. in Mathematics from the <a href='https://math.hse.ru/en/'>Higher School of Economics</a> in Moscow, where I wrote my <a href='https://www.hse.ru/en/edu/vkr/296285338'>master’s thesis</a> under <a href='https://www.hse.ru/en/org/persons/160474191'>Vadim Vologodsky</a>, and a B.S. in Mathematics with a specialization in applied algebra from <a href='https://math.snu.edu.in/'>Shiv Nadar University</a> in India.<br><br> <a href='mailto:bdeewang@ucsc.edu'>Email</a> is the best way to get in touch with me.",
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
