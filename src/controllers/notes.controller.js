const notesCtrl = {}

notesCtrl.renderNoteForm = (req, res) => {
    res.send('Note add')
}

notesCtrl.createNewNote = (req, res) => {
    res.send('Note send')
}

notesCtrl.renderNotes = (req, res) => {
    res.send('render notes')
}

notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit form')
}

notesCtrl.updateNote = (req, res) => {
    res.send('update note')
}

notesCtrl.deleteNote = (req, res) => {
    res.send('Delete note')
}

module.exports = notesCtrl