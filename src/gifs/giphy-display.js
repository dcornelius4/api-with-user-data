export function makeGiphyTemplate(giphyObject) {
    const html = /*html*/ `<li>
    <img src="${giphyObject.src}" alt="ryan gosling gif">
</li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}