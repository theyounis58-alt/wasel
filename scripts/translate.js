const fs = require('fs');
const path = require('path');

// Simple translation service (in production, use proper translation API)
const translate = async (text, targetLang) => {
  // This is a placeholder - in production you would use:
  // - Google Translate API
  // - DeepL API
  // - Azure Translator
  // - Or similar service
  
  // For now, return the original text with a comment
  return text + ' (auto-translated)';
};

async function translateMessages() {
  try {
    const enPath = path.join(__dirname, '../src/messages/en.json');
    const arPath = path.join(__dirname, '../src/messages/ar.json');
    
    // Read English messages
    const enMessages = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    
    console.log('Translation script ready. In production, connect to translation API.');
    console.log('English messages loaded:', Object.keys(enMessages).length, 'top-level keys');
    
    // In production, you would:
    // 1. Traverse the enMessages object recursively
    // 2. For each string value, call the translation API
    // 3. Build the Arabic messages object
    // 4. Write to ar.json
    
    console.log('To enable auto-translation:');
    console.log('1. Sign up for Google Translate API or DeepL');
    console.log('2. Add your API key to .env.local');
    console.log('3. Uncomment and modify the translation logic below');
    
    /*
    // Example implementation:
    const arMessages = await translateObject(enMessages, 'ar');
    fs.writeFileSync(arPath, JSON.stringify(arMessages, null, 2), 'utf8');
    console.log('Arabic messages updated successfully');
    */
    
  } catch (error) {
    console.error('Translation failed:', error);
    process.exit(1);
  }
}

async function translateObject(obj, targetLang) {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      result[key] = await translate(value, targetLang);
    } else if (typeof value === 'object' && value !== null) {
      result[key] = await translateObject(value, targetLang);
    } else {
      result[key] = value;
    }
  }
  
  return result;
}

translateMessages();