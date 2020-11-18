const fs = require("fs");
const chalk = require("chalk");


const addNotes = (titlee,bodyy) => {
    const existingNotes = loadNotes(); 
    if(!check(titlee)) {
    existingNotes.push({
        title:titlee,
        body:bodyy
    });
     saveNotes(existingNotes);
     console.log(chalk.bgGreen.black('Success') + ' : Note successfully registered' );
    } else { console.log(chalk.bgRed.black('Error') + ' : Title already exist!!'); }
    
}

const remNotes = (titlee) => {
   
    if(!check(titlee)) { console.log(chalk.bgRed.black('Error') + ' : Title does not exist!!'); return; };
    var existingNotes = loadNotes();
    var new_list =  existingNotes.filter(element =>  element.title !== titlee);
    saveNotes(new_list);
    console.log(chalk.bgGreen.black('Success') + ' : Note successfully removed!!');
    
}

const listNotes = () => {
    var existingNotes = loadNotes();
    console.log(chalk.bgYellow.black('Your List :'));
    existingNotes.forEach((note) => {console.log(note.title);}) 
    
}

const readNotes = (titlee) => {
    var existingNotes = loadNotes();
    if(check(titlee)){
        existingNotes.forEach((note) => {
            if(titlee === note.title) {
                console.log(chalk.bgYellow.black(note.title));
                console.log(note.body);
            }
        })
    } else console.log(chalk.bgRed.black('Error:') + ' no such title found!');
    
}
// --------------------------- utility functions -----------------------------
const check = (titlee) => {
    var existingNotes = loadNotes();
    var checkVar = false;
    existingNotes.forEach(e => { if(e.title === titlee) {
        checkVar= true;
    }
});
    return checkVar;
}

const saveNotes = (existingNotes) => {
fs.writeFileSync('my-notes.json',JSON.stringify(existingNotes));
}



const loadNotes = () =>  {
     try {
         var buffer = fs.readFileSync('my-notes.json');
         var bufferToString = buffer.toString();
         return JSON.parse(bufferToString);
     } catch(e) {
          
         return []
     }
}

// ----------------------------exports---------------------

module.exports = {
    addNotes,
    remNotes,
    listNotes,
    readNotes
}

