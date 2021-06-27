import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

function CodeEditor({ value, language, editorTitle, onChange }) {
    const handleChange = (editor, data, value) => onChange(value);

    return (
        <div className="editor-container">
            <div className="editor-title">{ editorTitle }</div>
            <button>O/C</button>

            <ControlledEditor
                value={ value }
                className="code-mirror-wrapper"
                onBeforeChange={ handleChange }
                options={{
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                    lineWrapping: true,
                    lineSeparator:true,
                }}
            />
        </div>
    );
}

export default CodeEditor;
