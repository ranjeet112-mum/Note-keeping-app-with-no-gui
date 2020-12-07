// --------------------------Requires --------------------------------

const notes = require("./notes.js");
const yargs = require("yargs");

// --------------------------Commands ----------------------------------
yargs.version("16.1.0");
yargs.command({
    command: 'add',
    describe : 'addin ya command',
    builder:{
        title: {
            describe:'title of the node',
            demandOption:true,
            type:'string',
        },
        body: {
            describe:'This is the actual note!',
            demandOption:true,
            type:'string',
        },
    },
    handler : () => notes.addNotes(yargs.argv.title,yargs.argv.body),
    
});
yargs.command({
    command:'rem',
    describe : 'Remove a note',
    builder: {
            title : {
                describe: 'the title that needs to be deleted',
                demandOption:true,
                type: 'string',
            }
    },
    handler:() => notes.remNotes(yargs.argv.title)
});
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler:() => notes.listNotes(),
});
yargs.command({
    command:'read',
    describe:'reading a particular note!',
    builder: {
        title: {
            describe:'important to find the note',
            demandOption:true,
            type: 'string'
        }
    },
    handler: () => notes.readNotes(yargs.argv.title),
});
yargs.parse();

console.log(process.argv)