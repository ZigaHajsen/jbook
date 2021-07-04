import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4050')
  .action(async (filename = 'notebook.js', options: { port: string }) => {
    const { port } = options;
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(port), path.basename(filename), dir);
      console.log(
        `Opened ${filename}. Navigate to http://localhost:${port} to edit the file`
      );
    } catch (err) {
      if (err.code === 'EADDRINUSE') {
        console.error('Port in use');
      } else {
        console.error('Here is the problem:', err.message);
      }
      process.exit(1);
    }
  });
