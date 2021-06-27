import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

function CodeEditor({ value, language, editorTitle, onChange }) {
    const [ editorOpen, setEditorOpen ] = useState(true);

    const handleChange = (editor, data, value) => onChange(value);

    return (
        <div className={ `editor-container ${ !editorOpen && 'collapsed-editor' }` }>
            <div className="editor-head">
                { editorTitle }
                <button
                    type="button"
                    className="expand-collapse-button"
                    onClick={ () => setEditorOpen(preVal => !preVal) }
                >
                    <FontAwesomeIcon icon={ editorOpen ? faCompressAlt : faExpandAlt } />
                </button>
            </div>

            <ControlledEditor
                value={ value }
                className="code-mirror-wrapper"
                onBeforeChange={ handleChange }
                options={{
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                    lineWrapping: true,
                }}
            />
        </div>
    );
}

export default CodeEditor;
