
import express from 'express';
import { generateAscii } from './utils/generateAscii.js';
import figlet from 'figlet';
const app = express();

// Middleware setup
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

let availableFonts = [];

figlet.fonts((err, fonts) => {
  if (err) {
    console.error('Error fetching fonts:', err);
  } else {
    availableFonts = fonts;
  }
});

app.get('/', (req, res) => {
    res.render("index",{fonts:availableFonts});    
  });
app.post("/enterText",generateAscii)
// Server
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)


});
