import { makeHeader } from '../src/shared/header-component.js';
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

