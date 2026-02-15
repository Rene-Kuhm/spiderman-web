
// fastcode-skill Plugin Loader
// FastCode integration for code analysis and understanding
import fastcode from '../node_modules/fastcode';

export function activate(context) {
  console.log('fastcode-skill activated');
  
  // Register FastCode commands in OhMyOpenCode
  if (typeof context.registerSkill === 'function') {
    context.registerSkill('fastcode', {
      path: '../node_modules/fastcode',
      description: 'FastCode: Accelerating and Streamlining Your Code Understanding - 3-4x faster than Cursor, 44% cost reduction, highest accuracy score',
    });
    
    // Register commands for global access
    context.registerCommand({
      id: 'fastcode.query',
      label: 'Ask FastCode',
      description: 'Query your codebase with natural language',
      handler: async () => {
        const result = await fastcode.query('How does this project work?');
        context.showNotification('success', `FastCode: ${result.total_tokens || 0} tokens used`);
      }
    });

    context.registerCommand({
      id: 'fastcode.load-repo',
      label: 'Load Repository',
      description: 'Load and index the Spider-Man repository',
      handler: async () => {
        const result = await fastcode.loadRepo('D:\\web-react19', false);
        context.showNotification('success', `FastCode: ${result.files_count || 0} files indexed`);
      }
    });

    context.registerCommand({
      id: 'fastcode.summary',
      label: 'Repository Summary',
      description: 'Get Spider-Man repository summary and statistics',
      handler: async () => {
        const result = await fastcode.getSummary();
        context.showNotification('success', `Spider-Man: ${result.summary?.files_count || 0} files, ${result.summary?.functions_count || 0} functions`);
      }
    });
  }
}
 
export function deactivate() {
  console.log('fastcode-skill deactivated');
}
