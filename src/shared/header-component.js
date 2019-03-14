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

export function makeProfile(user) {
    const html = /*html*/ `
    <div class="profile">
    <img src="${user.photoURL}">
    <span>${user.displayName}</span>
    <button>Sign Out</button>
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


export function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    const dom = makeHeader();
    headerContainer.appendChild(dom);

}


   

