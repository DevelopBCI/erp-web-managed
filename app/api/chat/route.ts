import { createPartFromUri, GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const model_name = 'gemini-3-flash-preview';
const CACHE_DISPLAY_NAME = "qsoft-erp-docs-cache-v1";
let globalCacheName: string | undefined = undefined;

export async function uploadRemotePDF(url: string, displayName: string) {
    const pdfBuffer = await fetch(url)
        .then((response) => response.arrayBuffer());

    const fileBlob = new Blob([pdfBuffer], { type: 'application/pdf' });

    const file = await ai.files.upload({
        file: fileBlob,
        config: {
            displayName: displayName,
        },
    });

    // Wait for the file to be processed.
    if (!file.name) {
        throw new Error('File upload did not return a valid name.');
    }
    let getFile = await ai.files.get({ name: file.name });
    while (getFile.state === 'PROCESSING') {
        getFile = await ai.files.get({ name: file.name });
        console.log(`current file status: ${getFile.state}`);
        console.log('File is still processing, retrying in 2 seconds');

        await new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    }
    if (getFile.state === 'FAILED') {
        throw new Error('File processing failed.');
    }

    return file;
}

export async function getOrCreateCache() {
  const cachesList = await ai.caches.list();
  const caches = [];
  for await (const cache of cachesList) {
    caches.push(cache);
  }
  const existingCache = caches.find(c => c.displayName === CACHE_DISPLAY_NAME);

  console.log("Cahce Name:", existingCache?.name ?? "No existing cache found");
  // await ai.caches.delete({ name: existingCache?.name! }); // Delete existing cache to ensure fresh content. Remove this line if you want to keep old cache until it expires.
  if (existingCache) {
    return existingCache.name;
  }

  const fileUrls = [
    //Documents
    { url: "https://www.erptothai.com/doc/Q-Soft_MRP_THV3.pdf", name: "File 1" },
    { url: "https://www.erptothai.com/doc/APS_new.pdf", name: "File 2" },
    { url: "https://www.erptothai.com/doc/Q.Soft_PM_V3Brochue(thai).pdf", name: "File 3" },
    //Brochure
    // { url: "https://www.erptothai.com/doc/CoursePowerBI-Advanced.jpg", name: "File 4" },
    // { url: "https://www.erptothai.com/doc/CoursePowerBI-Basic.jpg", name: "File 5" },
    { url: "https://www.erptothai.com/doc/Q_Soft_SCM_Brochure6901.pdf", name: "File 6" },
    // { url: "https://www.erptothai.com/doc/SOApp.jpg", name: "File 7" },
    { url: "https://www.erptothai.com/doc/Q_Soft_MFG-WMS_Brochue(thai).pdf", name: "File 8" },
    { url: "https://www.erptothai.com/doc/Medicine_Pay_Out_System(SmartTag).pdf", name: "File 9" },
    { url: "https://www.erptothai.com/doc/Q_Soft_APS_Brochue(thai).pdf", name: "File 10" },
    { url: "https://www.erptothai.com/doc/Q_Soft_Ser-WMS_Brochue(thai).pdf", name: "File 11" },
    { url: "https://www.erptothai.com/doc/Q.Soft_PM_V1Brochue(thai).pdf", name: "File 12" },
    { url: "https://www.erptothai.com/doc/Q_Soft_SMS_Brochue.pdf", name: "File 13" },
    { url: "https://www.erptothai.com/doc/QSoftElectricShield.pdf", name: "File 14" },
    { url: "https://www.erptothai.com/doc/DPS_1.pdf", name: "File 15" },
    //Winspeed
    { url: "https://www.erptothai.com/doc/WINSpeed/winspeed_updated_0421.pdf", name: "File 16" },
    { url: "https://www.erptothai.com/doc/WINSpeed/backup_WINSpeed.pdf", name: "File 17" },
    { url: "https://www.erptothai.com/doc/WINSpeed/CC.pdf", name: "File 18" },
    { url: "https://www.erptothai.com/doc/WINSpeed/COST.pdf", name: "File 19" },
    { url: "https://www.erptothai.com/doc/WINSpeed/DELDOC.pdf", name: "File 20" },
    { url: "https://www.erptothai.com/doc/WINSpeed/form_winspeed_myaccount.pdf", name: "File 21" },
    { url: "https://www.erptothai.com/doc/WINSpeed/GL.pdf", name: "File 22" },
    { url: "https://www.erptothai.com/doc/WINSpeed/GR.pdf", name: "File 23" },
    { url: "https://www.erptothai.com/doc/WINSpeed/IC.pdf", name: "File 24" },
    { url: "https://www.erptothai.com/doc/WINSpeed/Invoice.pdf", name: "File 25" },
    { url: "https://www.erptothai.com/doc/WINSpeed/IVAG.pdf", name: "File 26" },
    { url: "https://www.erptothai.com/doc/WINSpeed/Landed-Cost.pdf", name: "File 27" },
    { url: "https://www.erptothai.com/doc/WINSpeed/License_HRMI.pdf", name: "File 28" },
    { url: "https://www.erptothai.com/doc/WINSpeed/PO.pdf", name: "File 29" },
    { url: "https://www.erptothai.com/doc/WINSpeed/PO_SO_Manual_WINSpeed_Q.Soft.pdf", name: "File 30" },
    { url: "https://www.erptothai.com/doc/WINSpeed/PV.pdf", name: "File 31" },
    { url: "https://www.erptothai.com/doc/WINSpeed/RE.pdf", name: "File 32" },
    { url: "https://www.erptothai.com/doc/WINSpeed/SO.pdf", name: "File 33" },
    { url: "https://www.erptothai.com/doc/WINSpeed/Stock_TB.pdf", name: "File 34" },
    { url: "https://www.erptothai.com/doc/WINSpeed/WINSpeed_Delete_License.pdf", name: "File 35" },
    //HRMI
    { url: "https://www.erptothai.com/doc/HRMI/hrmi_updated_0421.pdf", name: "File 36" },
    { url: "https://www.erptothai.com/doc/HRMI/HR_HRMi.pdf", name: "File 37" },
    // { url: "https://www.erptothai.com/doc/HRMI/Manual_HRMI_Payroll.pdf", name: "File 38" },
    // { url: "https://www.erptothai.com/doc/HRMI/Manual_HRMI_Payroll_Full.pdf", name: "File 39" },
    // { url: "https://www.erptothai.com/doc/HRMI/SetEmailAlertHRMi.pdf", name: "File 40" },
    //CRM
    { url: "https://www.erptothai.com/doc/CRM/crm_updated_0421.pdf", name: "File 41" },
    //Suppoort
    // { url: "https://www.erptothai.com/doc/WINSpeed/SpecServer-Cloud(QSoft-WINSpeed).pdf", name: "File 42" },
    // { url: "https://www.erptothai.com/doc/LeanManufacturing(WhitePaper).pdf", name: "File 43" },
    // { url: "https://www.erptothai.com/doc/setupSQL2005.pdf", name: "File 44" },
    // { url: "https://www.erptothai.com/doc/setupSQL2008R2.pdf", name: "File 45" },
    // { url: "https://www.erptothai.com/doc/setupSQL2012.pdf", name: "File 46" },
    // { url: "https://www.erptothai.com/doc/ISO9001-2008Brochure.pdf", name: "File 47" },
    { url: "https://www.erptothai.com/doc/WINSpeed/SpecServer-Cloud(QSoft-WINSpeed).pdf", name: "File 48" },
  ];

  const uploadedFiles = await Promise.all(
    fileUrls.map(item => uploadRemotePDF(item.url, item.name))
  );

  const content = uploadedFiles.filter(file => file.uri && file.mimeType).map(file => createPartFromUri(file.uri!, file.mimeType!));
  
  const initialParts = [
    { text: 'บริบทข้อมูล: https://www.erptothai.com/ หรือ บริษัท บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด และ ฉันจะแนบไฟล์ pdf ให้คุณช่วยศึกษารายละเอียดทั้งหมดในไฟล์นี้ด้วยครับ'},
    ...content,
  ];
  
  const newCache = await ai.caches.create({
    model: model_name,
    config: {
      displayName: CACHE_DISPLAY_NAME, // Important for lookups
      contents: initialParts,
      systemInstruction: `คุณคือผู้ช่วยที่ตอบคำถาม "เฉพาะจากข้อมูลที่ให้มาเท่านั้น" ถ้าถามถึงข้อมูลที่อยู่หรือเบอร์โทรติดต่อให้ยึดข้อมูลบนเว็บไซต์ ห้ามใช้ความรู้ภายนอก ห้ามเดา หากคำถามไม่เกี่ยวข้องกับเนื้อหา หรือไม่มีคำตอบในเนื้อหา ให้ตอบว่า "ขออภัยครับ หากคำถามไม่เกี่ยวข้องกับเนื้อหาในเว็บไซต์นี้ ผมจะไม่สามารถตอบได้ครับ"`,
      ttl: `${3600}s` // Cache for 3600 = 1 hour
    },
  });

  return newCache.name;
}


export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!globalCacheName) {
      globalCacheName = await getOrCreateCache();
    }

    const chat = ai.chats.create({
      model: model_name,
      config: {
        cachedContent: globalCacheName,
      }
    });

    // For non-streaming response:
    const response = await chat.sendMessage({
      message: messages[messages.length - 1].content
    });
    const text = response.text;

    return NextResponse.json({ content: text, role: "assistant" });

    // // For streaming response:
    // const result = await chat.sendMessageStream({
    //   message: messages[messages.length - 1].content
    // });
    // const stream = new ReadableStream({
    //   async start(controller) {
    //     for await (const chunk of result) {
    //       const text = chunk.text;
    //       if (text) {
    //         controller.enqueue(new TextEncoder().encode(text));
    //       }
    //     }
    //     controller.close();
    //   },
    // });
    // return new Response(stream);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}
