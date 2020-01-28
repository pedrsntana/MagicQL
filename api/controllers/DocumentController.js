class DocumentContoller {
    constructor() {
        console.log('[CONTROL] DocumentController:Initiated');
    }

    getDocumentConfig = (req, res, next) => {
        const DOCUMENT_CONFIG = this.getDocumentConfig(req.params.collection);
    }
}

module.exports = DocumentContoller;