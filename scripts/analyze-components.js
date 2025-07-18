// Component usage tracking utility
// This script helps analyze component usage across the project

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all .astro files in src/
function getAllAstroFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      getAllAstroFiles(fullPath, files);
    } else if (item.endsWith('.astro') || item.endsWith('.tsx') || item.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Extract imports from file content
function extractImports(content) {
  const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
  const imports = [];
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  
  return imports;
}

// Analyze component usage
function analyzeComponentUsage() {
  const srcDir = path.join(__dirname, '..', 'src');
  const files = getAllAstroFiles(srcDir);
  
  const componentUsage = {};
  
  console.log('📊 Component Usage Analysis');
  console.log('============================\n');
  
  // Analyze each file
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const imports = extractImports(content);
      const relativePath = path.relative(srcDir, file);
      
      imports.forEach(importPath => {
        if (importPath.startsWith('@components/')) {
          if (!componentUsage[importPath]) {
            componentUsage[importPath] = [];
          }
          componentUsage[importPath].push(relativePath);
        }
      });
    } catch (error) {
      console.warn(`Warning: Could not read ${file}`);
    }
  });
  
  // Display results
  console.log('🔹 Component Usage Summary:');
  console.log('----------------------------');
  
  const sortedComponents = Object.entries(componentUsage)
    .sort(([, a], [, b]) => b.length - a.length);
  
  if (sortedComponents.length === 0) {
    console.log('No component usage found.');
  } else {
    sortedComponents.forEach(([component, usages]) => {
      console.log(`${component}: ${usages.length} usage(s)`);
      usages.forEach(usage => {
        console.log(`  └─ ${usage}`);
      });
      console.log('');
    });
  }
  
  // File size analysis
  console.log('\n📏 File Size Analysis:');
  console.log('----------------------');
  
  files.forEach(file => {
    try {
      const lines = fs.readFileSync(file, 'utf8').split('\n').length;
      const relativePath = path.relative(srcDir, file);
      
      if (lines > 1000) {
        console.log(`🔴 LARGE FILE: ${relativePath} (${lines} lines) - NEEDS SPLITTING!`);
      } else if (lines > 800) {
        console.log(`⚠️  Large file: ${relativePath} (${lines} lines) - Consider splitting`);
      } else if (lines > 500) {
        console.log(`🟡 Medium file: ${relativePath} (${lines} lines)`);
      }
    } catch (error) {
      console.warn(`Warning: Could not analyze ${file}`);
    }
  });
  
  console.log('\n✅ Analysis complete!');
  console.log('\nRecommendations:');
  console.log('• Files over 1000 lines MUST be split');
  console.log('• Consider creating sub-components for large files');
  console.log('• Update component registry with usage information');
  console.log('• Remove unused components to reduce bundle size');
}

// Run analysis
analyzeComponentUsage();
