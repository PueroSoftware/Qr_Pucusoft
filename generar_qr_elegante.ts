import canvas from 'canvas';
import { JSDOM } from 'jsdom';
import QRCodeStyling from 'qr-code-styling';
import fs from 'fs';

const { window } = new JSDOM('', { pretendToBeVisual: true });
const { document } = window;

(global as any).window = window;
(global as any).document = document;

const qrCode = new QRCodeStyling({
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
    nodeCanvas: canvas,
});

qrCode.getRawData('png').then((buffer: any) => {
    fs.writeFileSync('./qr_elegante.png', buffer);
    console.log('✅ QR generado con éxito como qr_elegante.png');
}).catch((err: any) => {
    console.error('❌ Error al generar el QR:', err);
});
