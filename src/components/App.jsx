import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

function App() {
    const [ html, setHtml ] = useState();
    const [ css, setCss ] = useState();
    const [ javascript, setJavascript ] = useState();

    return (
        <>
            <div className="pen pen-top">
                <CodeEditor
                    value={ html }
                    language="xml"
                    editorTitle="HTML"
                    onChange={ setHtml }
                />
                <CodeEditor
                    value={ css }
                    language="css"
                    editorTitle="CSS"
                    onChange={ setCss }
                />
                <CodeEditor
                    value={ javascript }
                    language="javascript"
                    editorTitle="JavaScript"
                    onChange={ setJavascript }
                />
            </div>

            <div className="pen pen-bottom">
                <iframe
                    width="100%"
                    height="100%"
                    title="output"
                    sandbox="allow-scripts"
                />
            </div>
        </>

    );
}

export default App;
