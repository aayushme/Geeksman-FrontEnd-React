/*====================================================
To use a theme simply uncomment the import statement 
and corresponding entry in themes object
=====================================================*/

// import "brace/theme/ambiance";
// import "brace/theme/chaos";
// import "brace/theme/chrome";
// import "brace/theme/clouds";
// import "brace/theme/clouds_midnight";
// import "brace/theme/cobalt";
import "brace/theme/crimson_editor";
// import "brace/theme/dawn";
// import "brace/theme/dracula";
// import "brace/theme/dreamweaver";
// import "brace/theme/eclipse";
// import "brace/theme/github";
// import "brace/theme/gob";
// import "brace/theme/gruvbox";
// import "brace/theme/idle_fingers";
// import "brace/theme/iplastic";
// import "brace/theme/katzenmilch";
// import "brace/theme/kr_theme";
// import "brace/theme/kuroir";
// import "brace/theme/merbivore";
// import "brace/theme/merbivore_soft";
// import "brace/theme/mono_industrial";
import "brace/theme/monokai";
// import "brace/theme/pastel_on_dark";
// import "brace/theme/solarized_dark";
// import "brace/theme/solarized_light";
// import "brace/theme/sqlserver";
// import "brace/theme/terminal";
// import "brace/theme/textmate";
// import "brace/theme/tomorrow";
// import "brace/theme/tomorrow_night";
// import "brace/theme/tomorrow_night_blue";
// import "brace/theme/tomorrow_night_bright";
// import "brace/theme/tomorrow_night_eighties";
// import "brace/theme/twilight";
// import "brace/theme/vibrant_ink";
// import "brace/theme/xcode";

//* To reproduce above imports
//* $ ls node_modules/brace/theme | awk '{ split($0,s,"."); print "import \"brace/theme/"s[1]"\";" }'

let themes = [
    // 'ambiance',
    // 'ambiance',
    // 'chaos',
    // 'chrome',
    // 'clouds',
    // 'clouds_midnight',
    // 'cobalt',
    'crimson_editor',
    // 'dawn',
    // 'dracula',
    // 'dreamweaver',
    // 'eclipse',
    // 'github',
    // 'gob',
    // 'gruvbox',
    // 'idle_fingers',
    // 'iplastic',
    // 'katzenmilch',
    // 'kr_theme',
    // 'kuroir',
    // 'merbivore',
    // 'merbivore_soft',
    // 'mono_industrial',
    'monokai',
    // 'pastel_on_dark',
    // 'solarized_dark',
    // 'solarized_light',
    // 'sqlserver',
    // 'terminal',
    // 'textmate',
    // 'tomorrow',
    // 'tomorrow_night',
    // 'tomorrow_night_blue',
    // 'tomorrow_night_bright',
    // 'tomorrow_night_eighties',
    // 'twilight',
    // 'vibrant_ink',
    // 'xcode',
];

export default themes;