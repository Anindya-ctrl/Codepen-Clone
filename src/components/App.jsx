import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
    const [ html, setHtml ] = useLocalStorage('html', `<!-- Markup is the core! -->\n\n<h1>Hello World!</h1>\n<p>Try coding something!</p>\n`);
    const [ css, setCss ] = useLocalStorage('css', `/* Want it to look more gorgeous? */\n\nbody {\n  display: grid;\n  place-items: center;\n}\n`);
    const [ javascript, setJavascript ] = useLocalStorage('js', `// Make your website functional!\n\ndocument.addEventListener('click', () => {\n  console.log('Clicked!');\n});\n`);
    const [ sourceDoc, setSourceDoc ] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSourceDoc(`
                <html>
                    <body>${ html }</body>
                    <style>${ css }</style>
                    <script>${ javascript }</script>
                </html>
            `);

        return () => clearTimeout(timeout);
        }, 500);
    }, [ html, css, javascript ]);

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
                    srcDoc={ sourceDoc }
                />
            </div>
        </>

    );
}

export default App;
