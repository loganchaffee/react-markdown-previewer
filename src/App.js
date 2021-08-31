import React, {useEffect, useState} from 'react'
const marked = require("marked");

function App() {
    
    let [editorContent, setEditorContent] = useState(`# Welcome! This is a markdown previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Here's a Link: https://loganchaffee.com/ 

Here's some code: \`<div>hello world</div>\`, between 2 backticks.

And here is a code block:

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

1. A list item
2. A second
3. A and a third

### A block quote from Theodore Roosevelt
> “It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.”

### An image of a robot:

![robot](https://ae01.alicdn.com/kf/HTB1fglPIpXXXXcHXFXXq6xXFXXX7/Mr-Robot-MS294-model-of-the-spring-walking-robot-for-the-old-foreign-trade-Vintage-robot.jpg_Q90.jpg_.webp)

`)
    let previewContent = marked(editorContent)

    const handleChange = (e) => {
        setEditorContent(e.target.value)
    }
 
    const createMarkup = () => {
        return {__html: previewContent}
    }
    
    return (
        <div id="app" >
            <h1 id='title'>Markdown Previewer</h1>
            <textarea 
                id='editor'
                value={editorContent}
                onChange={handleChange}
            />

            <div 
                id='preview' 
                dangerouslySetInnerHTML={createMarkup()}
            ></div>
        </div>
    )   
}

export default App;
