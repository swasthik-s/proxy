#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function removeProblematicFiles(dir) {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            removeProblematicFiles(fullPath);
        } else if (entry.name.includes('#') || entry.name.includes('?')) {
            console.log(`Removing problematic file: ${fullPath}`);
            fs.unlinkSync(fullPath);
        }
    }
}

// Clean up .netlify directory
const netlifyDir = path.join(__dirname, '.netlify');
if (fs.existsSync(netlifyDir)) {
    removeProblematicFiles(netlifyDir);
    console.log('Cleanup completed');
}
