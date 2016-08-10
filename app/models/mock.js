//@publisherServer
//ToFinishesssssssssss
var articles = [
        {
          _id: 1,
          name: "10วิธีส้รางโลกสวนด้วยมือเรา",
          readTime: 4, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "วิทย์ห่วย แทคติครีสอร์ต..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*1)
        },
        {
          _id: 2,
          name: "สุดยอด5นิสัยสร้างความปวดหัวให้ชาวบ้าน",
          readTime: 3, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "อพาร์ตเมนท์ คาแรคเตอร์นิว ไฟลต์..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*2)
        },
        {
          _id: 3,
          name: "รวยขึ้นแบบปลอดภัยแค่รู้จักใช้ Asset Allocation",
          readTime: 2, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "ตัวเองสหัชญาณเห็นด้วยไฮเอนด์ รีพอร์ท..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*3)
        },
        {
          _id: 4,
          name: "Promtpay รับ-ออมเงินได้ทันใจ",
          readTime: 1, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "วิทย์ห่วย แทคติครีสอร์ต..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*4)
        },
        {
          _id: 5,
          name: "โปรเจ็คสแควร์ เสกสรรค์เดี้ยง",
          readTime: 4, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "วิทย์ห่วย แทคติครีสอร์ต..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*2.5)
        },
        {
          _id: 6,
          name: "สตริงแชมปิยอง ตอกย้ำกัมมันตะ",
          readTime: 3, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "อพาร์ตเมนท์ คาแรคเตอร์นิว ไฟลต์..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*2)
        },
        {
          _id: 7,
          name: "ไคลแมกซ์แชเชือนคันยิ ลองดูแล้วดี",
          readTime: 2, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "ตัวเองสหัชญาณเห็นด้วยไฮเอนด์ รีพอร์ท..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*3)
        },
        {
          _id: 8,
          name: "จิ๊กซอว์ไลท์เอ็กซ์โปรามาธิบดี",
          readTime: 1, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "วิทย์ห่วย แทคติครีสอร์ต..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*4)
        },
        {
          _id: 9,
          name: "เพนกวินคำสาปโพลารอยด์แอดมิสชัน",
          readTime: 3, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "อพาร์ตเมนท์ คาแรคเตอร์นิว ไฟลต์..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*2.5)
        },
        {
          _id: 10,
          name: "ศิลปากรพาร์ทเนอร์อิสรชน",
          readTime: 2, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "ตัวเองสหัชญาณเห็นด้วยไฮเอนด์ รีพอร์ท..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()-60000*2)
        },
        {
          _id: 11,
          name: "อุรังคธาตุ ดิกชันนารี",
          readTime: 1, //min to read, compute everytime an article updated
          //filename
          displayPic : "article_pic148x216.jpg",
          contentS : "วิทย์ห่วย แทคติครีสอร์ต..",
          content : "content.md",//part raw file
          coverTitle: "JON SNOW'S<br>TARENTS",
          coverPic: "cover_pic846x400.jpg",
          updated: new Date((new Date()).getTime()+60000*3)
        }
      ];


var columns = [
        {
          _id: 1,
          name: "MoneyIdea",
          desc: "ดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ สังโฆดีพาร์ทเมนท์ปอดแหก โอเลี้ยงแรงใจนู้ดฮวงจุ้ย รองรับรองรับ โอเปร่าล็อบบี้สเปค โปรเจ็ค",
          //filename
          profilePic: "profile200x200.jpg",
          //filename
          coverPic: "cover1024x400.jpg",

          //_publisher: publishers,    //DO DO DO childListPubId
          articles: JSON.parse(JSON.stringify([articles[0],articles[1],articles[2],articles[3]])), //articles.Id 1-4 (4object)

          // when child articles updated, this field'll be updated as well.
          updated: new Date((new Date()).getTime()-60000*2)
        },
        {
          _id: 2,
          name: "EditionalPicked",
          desc: "พาร์ทเมนท์ปอดแหก รองรับรองรับดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ โอเลี้ยงแรงใจนู้ดฮวงจุ้ย สังโฆดี โอเปร่าล็อบบี้สเปค โปรเจ็ค",
          //filename
          profilePic: "profile200x200.jpg",
          //filename
          coverPic: "cover1024x400.jpg",

          //_publisher: publishers,    //DO DO DO childListPubId
          articles: JSON.parse(JSON.stringify([articles[4],articles[5],articles[6],articles[7],articles[8]])),//articles.Id 5-9 (5object)

          // when child articles updated, this field'll be updated as well.
          updated: new Date((new Date()).getTime()-60000*3)
        },
        {
          _id: 3,
          name: "WiseChoise",
          desc: "โอเปร่าล็อบบี้สเปค โปรเจ็คเพียบแปร้รันเวย์ โอเลี้ยงแรงใจโอเปร่าล็อบบี้สเปค โปรเจ็ค",
          //filename
          profilePic: "profile200x200.jpg",
          //filename
          coverPic: "cover1024x400.jpg",

          //_publisher: publishers,    //DO DO DO childListPubId
          articles: JSON.parse(JSON.stringify([articles[4],articles[5],articles[6],articles[9],articles[10]])), //articles.Id 10-11 (2object)

          // when child articles updated, this field'll be updated as well.
          updated: new Date((new Date()).getTime()-60000*4)
        }

      ];
/*publishers[0].columns = [columns[0], columns[2]]
//console.log(publishers[0].columns)*/

var publishers = [
        {
          _id: 1,
          PubName: "aommoney",
          name: "AomMonney",
          desc: "คาแรคเตอร์จุ๊ย แจ๊กพ็อตแอพพริคอท อ่อนด้อยดัมพ์คอนแทคไฮเทคดีเจ โจ๋ตัวเองสปิริตซิ่ง กรอบรูปบอยคอตกัมมันตะ พาสเจอร์ไรส์ไฮเปอร์แคร์มอคคา" ,
          //filename
          profilePic: "profile200x200.jpg",
          coverPic: "cover1024x400.jpg",
          //column list in publisher
          column : JSON.parse(JSON.stringify([columns[0], columns[2]])),
          updated: new Date((new Date()).getTime()-60000*0)  //DO DO DO listColId
        },
        {
          _id: 2,
          PubName: "publishertest",
          name: "PubilsherTest",
          desc: "สังโฆดีพาร์ทเมนท์ปอดแหก ดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ โอเลี้ยงแรงใจนู้ดฮวงจุ้ย รองรับรองรับ โอเปร่าล็อบบี้สเปค โปรเจ็ค" ,
          //filename
          profilePic: "profile200x200.jpg",
          coverPic: "cover1024x400.jpg",
          //column list in publisher
          column : JSON.parse(JSON.stringify([columns[1]])),    //DO DO DO listColId
          updated: new Date((new Date()).getTime()-60000*1)
        }
      ];

var users = [{
              _id : 1,//obj
              name : "oat teeraphat",
              desc : "รองรับรับรอง ล็อบบี้สเปค ดยุคทีวีจุ๊ยเพียบ",
              profilePic : "profile200x200.jpg",
              follow: JSON.parse(JSON.stringify([publishers[0],publishers[1]])),
              },
              {
              _id : 1,//obj
              name : "oat teeraphat",
              desc : "รองรับรับรอง ล็อบบี้สเปค ดยุคทีวีจุ๊ยเพียบ",
              profilePic : "profile200x200.jpg",
              follow : JSON.parse(JSON.stringify([publishers[0]])),
              }]

module.exports = {
  articles: articles,
  columns: columns,
  publishers: publishers,
  users : users
}