"use strict";
function update() {
  $("#editor").on("keyup", function () {
    var text = $("#editor").val();
    // let text = $("#editor").attr("value");
    $("#preview").html(marked(text, { breaks: true, gfm: true }));
  });
}

function place() {
  var placeholder = "# Markdown  \n## Edit\n[link](\"https://duckduckgo.com/\")   \n`printf(\"Hello, world!\n\");`  \n```  \nconsole.log(\"try block of code\");\nconsole.log(\"is it working?\");\n```  \n\n1. list item one  \n2. list item two  \n\n> bloqckquote hooray!  \n\n![I see you](https://images.techhive.com/images/article/2015/07/linus-torvalds-jet-100597317-primary.idge.jpg)  \n\n__the end__  ";

















  $("#editor").val(placeholder);
  // let content = $("#editor").val();
  $("#preview").html(marked(placeholder, { breaks: true, gfm: true }));
}

$(document).ready(function () {
  place();
  update();
});