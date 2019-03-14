import { makeHeader, makeProfile } from '../src/shared/header-component.js';
const test = QUnit.test;


test('making the header', assert => {
    const result = makeHeader();
    
    const expected = /*html*/ `
    <header>
    <img src="assets/streamifyLogo.png.png">
    <h1>Favorite Streams</h1>
</header>
    `;
    
    assert.htmlEqual(result, expected);
});



test('make user profile', assert => {
    const user = {
        displayName: 'Dave Cornelius',
        photoURL: '../assets/placeholder-image.png'
    };

    const expected = /*html*/ `
    <div class="profile">
    <img src="../assets/placeholder-image.png">
    <span>Dave Cornelius</span>
    <button>Sign Out</button>
    </div>
    `;

    const dom = makeProfile(user);

    assert.htmlEqual(dom, expected);

});

