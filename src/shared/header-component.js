export function makeHeader() {
    const html = /*html*/ `
    <header>
    <img src="assets/streamifyLogo.png.png">
    <h1>Favorite Streams</h1>
</header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content; 
}

const headerContainer = document.getElementById('header-container');

const dom = makeHeader();

headerContainer.appendChild(dom);