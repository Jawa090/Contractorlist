
const fs = require('fs');
const path = require('path');

const components = [
    "accordion", "alert-dialog", "alert", "aspect-ratio", "avatar", "badge",
    "breadcrumb", "button", "calendar", "card", "carousel", "chart", "checkbox",
    "collapsible", "command", "context-menu", "dialog", "drawer", "dropdown-menu",
    "form", "hover-card", "input-otp", "input", "label", "menubar", "navigation-menu",
    "pagination", "popover", "progress", "radio-group", "resizable", "scroll-area",
    "select", "separator", "sheet", "sidebar", "skeleton", "slider", "sonner",
    "switch", "table", "tabs", "textarea", "toast", "toaster", "toggle-group",
    "toggle", "tooltip"
];

function walk(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
};

const targetDirs = [
    path.join('src', 'pages', 'GC dashboard'),
    path.join('src', 'components', 'GC dashboard')
];

targetDirs.forEach(targetDir => {
    console.log(`Processing directory: ${targetDir}`);
    walk(targetDir, (filePath) => {
        if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;

            components.forEach(comp => {
                // Handle both double and single quotes
                const regexDouble = new RegExp(`"@/components/ui/${comp}"`, 'g');
                const regexSingle = new RegExp(`'@/components/ui/${comp}'`, 'g');
                content = content.replace(regexDouble, `"@/components/ui/gc/${comp}"`);
                content = content.replace(regexSingle, `'@/components/ui/gc/${comp}'`);
            });

            if (content !== originalContent) {
                try {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Updated: ${filePath}`);
                } catch (err) {
                    console.error(`Failed to update: ${filePath} - ${err.message}`);
                }
            }
        }
    });
});
