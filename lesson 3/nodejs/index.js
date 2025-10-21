import fs from "fs-extra";

async function createFolder(folderPath) {
  try {
    await fs.emptyDir(folderPath); // folder creation
    console.log(`Folder ${folderPath} has been created.`);
  } catch (err) {
    console.error('Error while creating a folder: ', err);
  }
}

async function createFile (fullFilePath) {
  try {
    await fs.ensureFile(fullFilePath); // file creation
    console.log(`File in this path ${fullFilePath} has been created successfully!`);
  } catch (err) {
    console.error('Error while creating a file: ', err);
  }
}

async function moveFile (source, path) {
  try {
    await fs.move(source, path);
    console.log (`File successfully moved in this path: ${path}!'`);
  } catch (err) {
    console.error('Error while moving a file: ', err);
  }
}

async function copyFile (source, path) {
  try {
    await fs.copy(source, path);
    console.log(`File successfully copied in this path: ${path}!'`);
  } catch (err) {
    console.error('Error while copying a file: ', err);
  }
}

async function deleteFileOrDirectory (fullPath) {
  try {
    await fs.remove(fullPath)
    console.log(`File or directory ${fullPath} successfully deleted!'`)
  } catch (err) {
    console.error('Error while deleting a file or directory: ', err)
  }
}

await createFolder('./result/firstFolder');
await createFile('./result/firstFolder/myFile');
await createFolder('./result/secondFolder');
await moveFile('./result/firstFolder/myFile', './result/secondFolder/myFile');
await createFolder('./result/thirdFolder');
await copyFile('./result/secondFolder/myFile', './result/thirdFolder/myCopiedFile');
await deleteFileOrDirectory ('./result/secondFolder/myFile');
await deleteFileOrDirectory ('./result/thirdFolder/myCopiedFile');
await deleteFileOrDirectory ('./result/firstFolder');
await deleteFileOrDirectory ('./result/secondFolder');
await deleteFileOrDirectory ('./result/thirdFolder');









