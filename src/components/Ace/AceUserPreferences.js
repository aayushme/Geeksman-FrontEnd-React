import React from 'react';
import AceThemes from './AceThemes';
import AceLanguages from './AceLanguages';

const AceUserPreferences = ({ theme, setTheme, language, setLanguage, fontSize, setFontSize, isFull, setIsFull, editorHeight, setEditorHeight }) => {

    const updateTheme = (newTheme) => {
        localStorage.setItem('editorTheme', newTheme);
        setTheme(newTheme);
    }

    const updateLanguage = (newLanguage) => {
        localStorage.setItem('editorLanguage', newLanguage);
        setLanguage(newLanguage);
    }

    // const updateFontSize = (newFontSize) => {
    //     localStorage.setItem('editorFontSize', newFontSize);
    //     setFontSize(newFontSize);
    // }

    const toggleFullScreen = () => {
        if (isFull) {
            setIsFull(!isFull);
            setEditorHeight('600px');
        } else {
            setIsFull(!isFull);
            setEditorHeight('95.4vh');
        }
    }

    return (
        <div id="ace-user-preferences-container">
            <select className="ace-user-preference-dropdown language" name="language" defaultValue={language} onChange={(e) => { updateLanguage(e.target.value) }}>
                {AceLanguages.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
            <select className="ace-user-preference-dropdown theme" name="theme" defaultValue={theme} onChange={(e) => { updateTheme(e.target.value) }}>
                {AceThemes.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
            {/* <input className="ace-user-preference font-size" type="number" value={fontSize} min="12" max="24" step="1" onChange={(e) => { updateFontSize(parseInt(e.target.value)) }} /> */}
            <img className="ace-user-preference-icon full-screen" onClick={toggleFullScreen} src="/images/svg/full-screen.svg" alt="full screen icon" />
        </div>
    );
}

export default AceUserPreferences;
