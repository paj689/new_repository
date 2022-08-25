import express from 'express';
import chalk from 'chalk';
import DEBUG from 'debug';
import morgan from 'morgan';
const debug = DEBUG("app");
import path from 'path';
import { fileURLToPath } from 'node:url'

const app = express();

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

app.use(morgan('tiny', {title:'Globalmantix'}));
app.use(express.static(path.join(dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title:'Welcome to Globomantics', data: ['a', 'b', 'c']});
    debug(`${chalk.blueBright('someone is on your page :)')}`)
});


app.listen(process.env.PORT, () => {
   debug(`${chalk.green('listening to porty ')} ${chalk.yellow(process.env.PORT)}`);
});