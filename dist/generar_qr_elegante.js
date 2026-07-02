"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = __importDefault(require("canvas"));
const jsdom_1 = require("jsdom");
const qr_code_styling_1 = __importDefault(require("qr-code-styling"));
const fs_1 = __importDefault(require("fs"));
const { window } = new jsdom_1.JSDOM('', { pretendToBeVisual: true });
const { document } = window;
global.window = window;
global.document = document;
const qrCode = new qr_code_styling_1.default({
    width: 1000,
    height: 1000,
    data: "https://puerosoftware.github.io/QR_Pucusoft/",
    dotsOptions: {
        color: "#003366",
        type: "extra-rounded"
    },
    cornersSquareOptions: {
        type: "extra-rounded"
    },
    backgroundOptions: {
        color: "#FFFFFF",
    },
    nodeCanvas: canvas_1.default,
});
qrCode.getRawData('png').then((buffer) => {
    fs_1.default.writeFileSync('./qr_elegante.png', buffer);
    console.log('✅ QR generado con éxito como qr_elegante.png');
}).catch((err) => {
    console.error('❌ Error al generar el QR:', err);
});
