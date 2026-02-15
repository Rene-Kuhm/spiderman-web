# FastCode Integration for OhMyOpenCode

## Overview

FastCode has been integrated globally in OhMyOpenCode, providing code analysis and understanding capabilities.

## Features

FastCode offers:
- ⚡ **Superior Speed**: 3-4x faster than Cursor and Claude Code
- 💰 **Cost Efficiency**: 44-55% cost reduction compared to alternatives
- 🎯 **Highest Accuracy**: Outperforms competitors on all benchmarks
- 📊 **Token Savings**: Up to 90% reduction through smart navigation

## Available Commands

| Command | Shortcut | Description |
|---------|-----------|-------------|
| Ask FastCode | `Ctrl+Shift+K` | Query your codebase with natural language |
| Load Repository | `Ctrl+Shift+L` | Load and index the Spider-Man repository |
| Repository Summary | `Ctrl+Shift+S` | Get repository summary and statistics |

## How It Works

### Plugin Architecture

```
OhMyOpenCode
  ↓
plugins_backup/fastcode-skill.js
  ↓
node_modules/fastcode/
  ├─ index.js (main module)
  └─ package.json (skill manifest)
```

### Integration Methods

**1. Global Commands**
The FastCode skill registers three global commands that can be accessed from anywhere:
- `fastcode.query` - Ask questions about your code
- `fastcode.load-repo` - Index/load the project
- `fastcode.summary` - Get statistics

**2. Skill Registration**
The plugin uses `context.registerSkill()` to register FastCode as an OhMyOpenCode skill with the following configuration:

```javascript
{
  path: '../node_modules/fastcode',
  description: 'FastCode: Accelerating and Streamlining Your Code Understanding',
}
```

## Current Status

**Mode**: Stubs (Simulation)
- FastCode functions are simulated for demonstration
- To enable real functionality, run the FastCode API server

**Next Steps for Full Integration**:

1. **Start FastCode API Server**
   ```bash
   cd path/to/fastcode
   python api.py --host 0.0.0.0 --port 8000
   ```

2. **Update Configuration**
   Modify `.opencode/plugins_backup/fastcode-skill.js` to use real API calls instead of stub responses

3. **Add Repository Filtering**
   Configure FastCode to pre-filter to Spider-Man repository

## Directory Structure

```
.opencode/
├── node_modules/
│   └── fastcode/
│       ├── index.js          # Main FastCode module
│       └── package.json      # Skill manifest
├── plugins_backup/
│   └── fastcode-skill.js  # OhMyOpenCode plugin loader
└── README.md                # This file
```

## Usage Examples

### Query Code
**Command Palette** → Type "Ask FastCode" → Type your question

Example questions:
- "How does the authentication work in this project?"
- "Explain the Hero component structure"
- "What files would be affected if I change the Spider-Man theme?"
- "How do the character cards work?"

### Load Repository
**Command Palette** → Type "Load Repository"

This will:
1. Index all files in `D:\web-react19`
2. Parse TypeScript/React code
3. Build semantic understanding
4. Provide analysis results

### Repository Summary
**Command Palette** → Type "Repository Summary"

Shows:
- Total files count
- Functions count
- Classes/components count
- Repository statistics

## Configuration

FastCode is configured in `.opencode/node_modules/fastcode/package.json`:

```json
{
  "opencode": {
    "skillId": "fastcode",
    "displayName": "FastCode",
    "description": "3-4x faster than Cursor, 44% cost reduction, highest accuracy score",
    "icon": "⚡",
    "commands": [...]
  }
}
```

## Integration Benefits

### For OhMyOpenCode
- ✅ Global accessibility from anywhere in VS Code
- ✅ Consistent command interface
- ✅ Easy activation/deactivation
- ✅ No additional plugins required

### For Spider-Man Project
- ⚡ Quick code analysis without leaving the editor
- 💰 Reduced analysis costs
- 🎯 High accuracy for complex React components
- 📊 Better understanding of project architecture

## Troubleshooting

**Issue**: Commands not appearing in Command Palette
**Solution**: 
1. Reload OhMyOpenCode
2. Check that `plugins_backup/fastcode-skill.js` is loaded
3. Verify `.opencode/node_modules/fastcode/` directory exists

**Issue**: Stub responses instead of real analysis
**Solution**: 
1. Start FastCode API server: `python api.py --host 0.0.0.0 --port 8000`
2. Update `fastcode-skill.js` to use real API calls

## Additional Resources

- [FastCode GitHub Repository](https://github.com/HKUDS/FastCode)
- [FastCode Documentation](https://github.com/HKUDS/FastCode#readme)
- [OhMyOpenCode Documentation](https://opencode.com/docs/)

## Version History

- **v1.0.0** (2025-02-15) - Initial integration with stub functionality
- **v1.0.1** (Planned) - Full API integration with real FastCode server
