const client = new XMLHttpRequest();
client.open("GET", "/cheese-ipsum.txt");
client.onreadystatechange = function() {
  if (client.readyState === 4) {
    const fileContents = client.responseText;
    const firstSentence = fileContents.slice(end=fileContents.indexOf("."))
    const restOfFirstParagraph = fileContents.slice(start=fileContents.indexOf(".")+1, end=fileContents.indexOf("\n") - 1)
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
  client.send();
}