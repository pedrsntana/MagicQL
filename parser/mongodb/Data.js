class Data {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.allowNull = true;
        this.visible = {
            main: true,
            detail: true,
        };
        this.editable = true;
        this.input = {
            type: 'placeholder'
        };
    }
}

module.exports.default = Data;