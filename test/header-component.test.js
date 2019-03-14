const test = QUnit.test;

function makeHeader() {
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