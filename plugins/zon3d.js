/* # Exclusively MsJessica
    # DATA THIEVES
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const lol = "```YOU MUST ENTER WORDS!``` \n\n alpha"
    

    if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'zon3d ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon?text1=Kyouko&text2=${encodeURIComponent(match[1])}&text3=on`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'ᑕᖇEᗩTEᗪ ᗷY alpha' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'zon3d ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon?text1=Kyouko&text2=${encodeURIComponent(match[1])}&text3=on`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'ᑕᖇEᗩTEᗪ ᗷY alpha' })

    }));
    
}
