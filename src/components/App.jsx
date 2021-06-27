import React from 'react';
import CodeEditor from './CodeEditor';

function App() {
    return (
        <>
            <div className="pen pen-top">
                <CodeEditor />
                <CodeEditor />
                <CodeEditor />
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
