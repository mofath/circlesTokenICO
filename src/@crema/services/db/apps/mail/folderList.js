const folderList = [
  {id: 121, name: 'Inbox', alias: 'inbox'},
  {id: 122, name: 'Sent', alias: 'sent'},
  {id: 123, name: 'Draft', alias: 'draft'},
  {id: 124, name: 'Starred', alias: 'starred'},
  {id: 125, name: 'Spam', alias: 'spam'},
  {id: 126, name: 'Trash', alias: 'trash'},
  {id: 127, name: 'Archive', alias: 'archive'},
];
export default folderList;

export const mailListMessages = (type, messages) => {
  switch (type) {
    case 125: {
      return messages['mail.sentToSpam'];
    }
    case 126: {
      return messages['mail.sentTrash'];
    }
    case 127: {
      return messages['mail.archived'];
    }
    default: {
      return messages['mail.updated'];
    }
  }
};
