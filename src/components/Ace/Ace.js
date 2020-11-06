import React, { useState } from "react";
import Fullscreen from "react-full-screen";
import AceEditor from "react-ace";
import AceOptions from './AceOptions';
import AceUserPreferences from './AceUserPreferences';
import 'brace/ext/language_tools'; // for autocompletion

var updateTimeoutHandle; // needs to be declared outside Ace function

const Ace = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('editorTheme') ? localStorage.getItem('editorTheme') : 'monokai');
    const [language, setLanguage] = useState(() => localStorage.getItem('editorLanguage') ? localStorage.getItem('editorLanguage') : 'cpp');
    const [fontSize, setFontSize] = useState(() => localStorage.getItem('editorFontSize') ? parseInt(localStorage.getItem('editorFontSize')) : 14);
    const [isFull, setIsFull] = useState(false);
    const [editorHeight, setEditorHeight] = useState('500px');

    const updateUserCode = (newValue) => {
        // key: <contestId-problem-id-language>, value: code
        localStorage.setItem('contest0-problem0-' + language, newValue);
        console.log('code updated.');
    }

    const onChange = (newValue) => {
        clearTimeout(updateTimeoutHandle);
        updateTimeoutHandle = setTimeout(() => { updateUserCode(newValue) }, 500);
    }

    return (
        <div>
            <Fullscreen
                enabled={isFull}
                onChange={(full) => { setIsFull(full) }}
            >
                <div className="ace-container">
                    <AceUserPreferences theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} fontSize={fontSize} setFontSize={setFontSize} isFull={isFull} setIsFull={setIsFull} editorHeight={editorHeight} setEditorHeight={setEditorHeight} />
                    <AceEditor
                        value={localStorage.getItem('contest0-problem0-' + language) ? localStorage.getItem('contest0-problem0-' + language) : ''}
                        mode={((language === 'c' || language === 'cpp') ? 'c_cpp' : language)}
                        theme={theme}
                        fontSize={fontSize}
                        height={editorHeight}
                        width={'100%'}
                        onChange={onChange}
                        editorProps={{ $blockScrolling: Infinity }}
                        {...AceOptions}
                    />
                </div>
            </Fullscreen>
            <div className="editor-buttons-container">
                <input className="editor-button compile-and-run" type="button" value="Compile and Run" />
                <input className="editor-button submit" type="button" value="Submit" />
            </div>
        </div>
    );
}

export default Ace;

