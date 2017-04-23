// JavaScript for all views.
const shell = require('electron').shell;
document.title += ` ${require('electron').remote.app.getVersion()}`;

const footerNav = document.querySelector('footer nav');
let footerLinks = [
    {
        textContent: 'lol-ping on GitHub',
        href: 'https://github.com/PascaleBeier/lol-ping'
    },
    {
        textContent: '@PascaleBeier',
        href: 'https://twitter.com/PascaleBeier'
    }
];

for (let link of footerLinks) {
    let a = document.createElement('a');
    a.textContent = link.textContent;
    a.href = '#';
    a.title = `Points your very own browser to ${link.href}.`;
    a.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        shell.openExternal(link.href);
    });
    footerNav.appendChild(a);
}