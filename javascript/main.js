window.onload = AddText;

function AddText() {
  const fileContents = `I love cheese, especially monterey jack pecorino. Goat cheddar cheesy feet say cheese hard cheese stilton jarlsberg mascarpone.
  Jarlsberg fromage jarlsberg everyone loves cheese triangles emmental cheddar cut the cheese. Cheese strings fromage cheesy feet queso manchego cheese and biscuits cut the cheese fromage. Halloumi chalk and cheese.`
  const firstSentence = fileContents.slice(start=0, end=fileContents.indexOf(".") + 1)
  const restOfFirstParagraph = fileContents.slice(start=fileContents.indexOf(".") + 1, end=fileContents.indexOf("\n"))
  document.getElementsByClassName("text-content")[0].innerHTML =
    `<p class="first-paragraph">
      <span class="first-sentence">
        ${firstSentence}
      </span>
      ${restOfFirstParagraph}
    </p>
    <p class="second-paragraph">
      ${fileContents.slice(fileContents.indexOf("\n") + 1)}
      </p>`
}