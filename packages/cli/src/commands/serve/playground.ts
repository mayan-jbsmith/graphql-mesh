import { Request, Response, RequestHandler } from 'express';
import { Source } from '@graphql-tools/utils';
import { handleFatalError } from '../../handleFatalError';
import { Logger } from '@graphql-mesh/types';
import { playgroundContent } from './playground-content';

export const playgroundMiddlewareFactory = ({
  baseDir,
  documents,
  graphqlPath,
  logger,
  title = 'GraphQL Mesh',
}: {
  baseDir: string;
  documents: Source[];
  graphqlPath: string;
  logger: Logger;
  title?: string;
}): RequestHandler => {
  let defaultQuery$: Promise<string>;

  return function (req: Request, res: Response, next) {
    defaultQuery$ =
      defaultQuery$ ||
      Promise.resolve()
        .then(async () => {
          let defaultQuery: string;
          if (documents?.length) {
            defaultQuery = documents.reduce((acc, doc) => (acc += doc.rawSDL! + '\n'), '');
          }
          return defaultQuery;
        })
        .catch(e => handleFatalError(e, logger));
    if (req.query.query) {
      next();
      return;
    }

    defaultQuery$
      .then(defaultQuery => {
        res.send(`
        <html>
        <head>
          <title>${title}</title>
          <link rel="shortcut icon" href="https://www.graphql-mesh.com/img/favicon.ico">
        </head>
        <body>
          <script>
            window.defaultQuery = ${JSON.stringify(defaultQuery)};
            window.endpoint = ${JSON.stringify(graphqlPath)};
          </script>
          <script>
            ${playgroundContent}
          </script>
        </body>
      </html>
      `);
      })
      .catch(e => handleFatalError(e, logger));
  };
};
