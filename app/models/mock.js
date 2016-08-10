var mock =
      {
        "user" : [
// oat is login with FB and match local AomMonney&Pubilshertest Admin page
                    {
                    "_id": 1,
                    "email": "oateerapat@gmail.com",
                    "display": "OatTeeraphat",
                    //hashed
                    "password": 1234,
                    "username": "oat",
                    // limit 100 characters
                    "desc": "ไม่มีผู้ใดที่สมัครรักใคร่ในความเจ็บปวด หรือเสาะแสวงหาและปรารถนาจะครอบครองความเจ็บปวด นั่นก็เป็นเพราะว่ามันเจ็บปวด...",
                    "facebook": {
                      "id": "1286107164733565",
                      "email": "teeraphat_master@hotmail.com",
                      "name": "Oat Teeraphat",
                      "token": "EAAMjQe8eZCQMBALIGlpqoU0p6FIPGXZBafgmXZA4Jqkf0iRIUyZA0wjlTK71izRkAUMMqi7NyDJBtKbGs55Yio9VKqMdNz8ZBL3N8EGcvMSALnZA8bV7zs4B5nwjIK8BpbqwVO6zj0IVMP0x3lZAeDfsOQP45BUgLkZD",
                      "pic" : "http://graph.facebook.com/1286107164733565/picture?width=200&height=200"
                    },
                    "roles" : [
                                {"role":3, "kind":"publisher", "object": 1 },
                                {"role":1, "kind":"publisher", "object": 2 }
                              ],
                    "profilePic": "http://graph.facebook.com/1286107164733565/picture?width=200&height=200",
                    "profilePic_s": "http://graph.facebook.com/1286107164733565/picture?width=39&height=39",
                    "profilePic_m": "http://graph.facebook.com/1286107164733565/picture?width=160&height=160"
                  },
            // chick is login with local AomMonney writer
                  {
                    "_id": 2,
                    "email": "kai.chr@gmail.com",
                    "display": "Fucking Chicken",
                    //hashed
                    "password": 1234,
                    "username":  "chick",
                    // limit 100 characters
                    "desc": "สเต็ป นางแบบเซ็กซ์เอฟเฟ็กต์ยังไง ม้านั่งอุปทานแฟ็กซ์รากหญ้าแอลมอนด์ คอรัปชัน ซาดิสม์ คาราโอเกะชาร์จหมั่นโถวเยอบีร่า",
                    "roles" : [
                                {"role":2, "kind":"column", "object": 1 },
                                {"role":2, "kind":"column", "object": 3 }
                              ],
                    "facebook": {
                                  "id": "100003544542430",
                                },
                    "profilePic": "users/0002/profile.jpg",
                    "profilePic_s": "users/0002/profile_39x39.jpg",
                    "profilePic_m": "users/0002/profile_160x160.jpg"
                  },
            // pai is login with fb adn in PublishrTest editor เพนกวินคำสาปโพลารอยด์แอดมิสชัน #9
                  {
                    "_id": 3,
                    "email": "pai@gmail.com",
                    "display": "Fri pai so handsome",
                    //hashed
                    "password": 1234,
                    "username":  "pai",
                    // limit 100 characters
                    "desc": "โคโยตีตาปรือวอลนัต แหววเหมย อัลบั้มแอ๊บแบ๊วครัวซองต์ลิมิต โอเปร่าผ้าห่มดิสเครดิตออดิชั่นวอฟเฟิล อัลบั้มโอเปอเรเตอร์ ตุ๋ยนาฏยศาลารีสอร์ท ",
                    "facebook": {
                      "id": "100001746697103",
                      "email": "pai@gmail.com",
                      "name": "Oat Teeraphat",
                      "token": "EAAMjQe8eZCQMBALIGlpqoU0p6FIPGXZBafgmXZA4Jqkf0iRIUyZA0wjlTK71izRkAUMMqi7NyDJBtKbGs55Yio9VKqMdNz8ZBL3N8EGcvMSALnZA8bV7zs4B5nwjIK8BpbqwVO6zj0IVMP0x3lZAeDfsOQP45BUgLkZD",
                      "pic" : "http://graph.facebook.com/100001746697103/picture?width=200&height=200"
                    },
                    "roles" : [
                                {"role":1, "kind":"article", "object": 9 },
                              ],
                    "profilePic": "users/0002/profile.jpg",
                    "profilePic_s": "users/0002/profile_39x39.jpg",
                    "profilePic_m": "users/0002/profile_160x160.jpg"
                  }
      ],

        "publisher" : [
                    {
                    "_id": 1,
                    "name": "AomMonney",
                    "desc": "คาแรคเตอร์จุ๊ย แจ๊กพ็อตแอพพริคอท อ่อนด้อยดัมพ์คอนแทคไฮเทคดีเจ โจ๋ตัวเองสปิริตซิ่ง กรอบรูปบอยคอตกัมมันตะ พาสเจอร์ไรส์ไฮเปอร์แคร์มอคคา",
                    "profilePic": "publisher/2/profile200x200.jpg",
                    "coverPic": "publisher/2/cover1024x400.jpg",
                    "column" :[{
                      // AomMonney has 2 column
                                "_id": 1,
                                "name": "MoneyIdea",
                                "desc": "สังโฆดีพาร์ทเมนท์ปอดแหก ดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ โอเลี้ยงแรงใจนู้ดฮวงจุ้ย รองรับรองรับ โอเปร่าล็อบบี้สเปค โปรเจ็ค",
                                "profilePic": "column/1/profile200x200.jpg",
                                "coverPic": "column/1/cover1024x400.jpg",
                                "articles":[{
                                            "_id": 1,
                                            "name": "10วิธีส้รางโลกสวนด้วยมือเรา",
                                            "readTime": 3,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/1/cover846x400.jpg",
                                            "profilePic":"article/1/profile148x216.jpg"
                                            },
                                            {
                                            "_id": 2,
                                            "name": "สุดยอด5นิสัยสร้างความปวดหัวให้ชาวบ้าน",
                                            "readTime": 2,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/2/cover846x400.jpg",
                                            "profilePic":"article/2/profile148x216.jpg"
                                            },
                                            {
                                            "_id": 3,
                                            "name": "Promtpay รับ-ออมเงินได้ทันใจ",
                                            "readTime": 5,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/3/cover846x400.jpg",
                                            "profilePic":"article/3/profile148x216.jpg"
                                            },
                                            {
                                            "_id": 4,
                                            "name": "รวยขึ้นแบบปลอดภัยแค่รู้จักใช้ Asset Allocation",
                                            "readTime": 1,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/4/cover846x400.jpg",
                                            "profilePic":"article/4/profile148x216.jpg"
                                            }]//article
                                },//column id1
                                {
                                "_id": 3,
                                "name": "WiseChoise",
                                "desc": "สังโฆดีพาร์ทเมนท์ปอดแหก ดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ โอเลี้ยงแรงใจนู้ดฮวงจุ้ย รองรับรองรับ โอเปร่าล็อบบี้สเปค โปรเจ็ค",
                                "profilePic": "column/3/profile200x200.jpg",
                                "coverPic": "column/3/cover1024x400.jpg",
                                "articles": [{
                                            "_id": 7,
                                            "name": "ไคลแมกซ์แชเชือนคันยิ ลองดูแล้วดี",
                                            "readTime": 3,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/7/cover846x400.jpg",
                                            "content": "article/7/content.md",
                                            "profilePic":"article/7/profile148x216.jpg"
                                            },
                                            {
                                            "_id": 8,
                                            "name": " จิ๊กซอว์ไลท์เอ็กซ์โปรามาธิบดี",
                                            "readTime": 3,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/8/cover846x400.jpg",
                                            "content": "article/8/content.md",
                                            "profilePic":"article/8/profile148x216.jpg"
                                            },
                                            {
                                            "_id": 9,
                                            "name": "เพนกวินคำสาปโพลารอยด์แอดมิสชัน",
                                            "readTime": 3,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/9/cover846x400.jpg",
                                            "content": "article/9/content.md",
                                            "profilePic":"article/9/profile148x216.jpg"
                                            },
                                            {
                                            "_id": 10,
                                            "name": "ศิลปากรพาร์ทเนอร์อิสรชน",
                                            "readTime": 3,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/10/cover846x400.jpg",
                                            "content": "article/10/content.md",
                                            "profilePic":"article/10/profile148x216.jpg"
                                            },
                                            {
                                            "_id": 11,
                                            "name": "อุรังคธาตุ ดิกชันนารี",
                                            "readTime": 3,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/11/cover846x400.jpg",
                                            "content": "article/11/content.md",
                                            "profilePic":"article/11/profile148x216.jpg"
                                            }]//5article
                              }]//column id3
                    },//Aommoney
                    {
                    "_id": 2,
                    "name": "PubilsherTest",
                    "desc": "สังโฆดีพาร์ทเมนท์ปอดแหก ดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ โอเลี้ยงแรงใจนู้ดฮวงจุ้ย รองรับรองรับ โอเปร่าล็อบบี้สเปค โปรเจ็ค",
                    "profilePic": "publisher/2/profile200x200.jpg",
                    "coverPic": "publisher/2/cover1024x400.jpg",
                    "column" :[{
                                "_id": 2,
                                "name": "EditionalPicked",
                                "desc": "สังโฆดีพาร์ทเมนท์ปอดแหก ดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ โอเลี้ยงแรงใจนู้ดฮวงจุ้ย รองรับรองรับ โอเปร่าล็อบบี้สเปค โปรเจ็ค",
                                "profilePic": "column/2/profile200x200.jpg",
                                "coverPic": "column/2/cover1024x400.jpg",
                                "articles": [{
                                            "_id": 5,
                                            "name": "โปรเจ็คสแควร์ เสกสรรค์เดี้ยง",
                                            "readTime": 3,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/5/cover846x400.jpg",
                                            "profilePic":"article/5/profile148x216.jpg"
                                            },
                                            {
                                            "_id": 6,
                                            "name": "สตริงแชมปิยอง ตอกย้ำกัมมันตะ",
                                            "readTime": 3,
                                            "coverTitle": "JON SNOW'S<br>TARENTS",
                                            "coverPic": "article/6/cover846x400.jpg",
                                            "profilePic":"article/1/profile148x216.jpg"
                                            }]//article
                              }]//column
    }],//publisher
    "column" :[
                  {
                  "_id": 1,
                  "name": "MoneyIdea",
                  "desc": "สังโฆดีพาร์ทเมนท์ปอดแหก ดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ โอเลี้ยงแรงใจนู้ดฮวงจุ้ย รองรับรองรับ โอเปร่าล็อบบี้สเปค โปรเจ็ค",
                  "profilePic": "column/1/profile200x200.jpg",
                  "coverPic": "column/1/cover1024x400.jpg",
                  "articles": [{
                      "_id": 1,
                      "name": "10วิธีส้รางโลกสวนด้วยมือเรา",
                      "readTime": 3,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/1/cover846x400.jpg",
                      "profilePic":"article/1/profile148x216.jpg"
                      },
                      {
                      "_id": 2,
                      "name": "สุดยอด5นิสัยสร้างความปวดหัวให้ชาวบ้าน",
                      "readTime": 2,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/2/cover846x400.jpg",
                      "profilePic":"article/2/profile148x216.jpg"
                      },
                      {
                      "_id": 3,
                      "name": "Promtpay รับ-ออมเงินได้ทันใจ",
                      "readTime": 5,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/3/cover846x400.jpg",
                      "profilePic":"article/3/profile148x216.jpg"
                      },
                      {
                      "_id": 4,
                      "name": "รวยขึ้นแบบปลอดภัยแค่รู้จักใช้ Asset Allocation",
                      "readTime": 1,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/4/cover846x400.jpg",
                      "profilePic":"article/4/profile148x216.jpg"
                      }]
                  },
          // EditionalPicked has 2 Article
                  {
                  "_id": 2,
                  "name": "EditionalPicked",
                  "desc": "สังโฆดีพาร์ทเมนท์ปอดแหก ดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ โอเลี้ยงแรงใจนู้ดฮวงจุ้ย รองรับรองรับ โอเปร่าล็อบบี้สเปค โปรเจ็ค",
                  "profilePic": "column/2/profile200x200.jpg",
                  "coverPic": "column/2/cover1024x400.jpg",
                  "articles": [{
                      "_id": 5,
                      "name": "โปรเจ็คสแควร์ เสกสรรค์เดี้ยง",
                      "readTime": 3,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/5/cover846x400.jpg",
                      "content": "article/5/content.md",
                      "profilePic":"article/5/profile148x216.jpg"
                      },
                      {
                      "_id": 6,
                      "name": "สตริงแชมปิยอง ตอกย้ำกัมมันตะ",
                      "readTime": 3,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/6/cover846x400.jpg",
                      "content": "article/6/content.md",
                      "profilePic":"article/1/profile148x216.jpg"
                      }]
                  },
          // WiseChoise has 5 Article
                  {
                  "_id": 3,
                  "name": "WiseChoise",
                  "desc": "สังโฆดีพาร์ทเมนท์ปอดแหก ดยุคทีวีจุ๊ยเพียบแปร้รันเวย์ โอเลี้ยงแรงใจนู้ดฮวงจุ้ย รองรับรองรับ โอเปร่าล็อบบี้สเปค โปรเจ็ค",
                  "profilePic": "column/3/profile200x200.jpg",
                  "coverPic": "column/3/cover1024x400.jpg",
                  "articles": [{
                      "_id": 7,
                      "name": "ไคลแมกซ์แชเชือนคันยิ ลองดูแล้วดี",
                      "readTime": 3,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/7/cover846x400.jpg",
                      "content": "article/7/content.md",
                      "profilePic":"article/7/profile148x216.jpg"
                      },
                      {
                      "_id": 8,
                      "name": " จิ๊กซอว์ไลท์เอ็กซ์โปรามาธิบดี",
                      "readTime": 3,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/8/cover846x400.jpg",
                      "content": "article/8/content.md",
                      "profilePic":"article/8/profile148x216.jpg"
                      },
                      {
                      "_id": 9,
                      "name": "เพนกวินคำสาปโพลารอยด์แอดมิสชัน",
                      "readTime": 3,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/9/cover846x400.jpg",
                      "content": "article/9/content.md",
                      "profilePic":"article/9/profile148x216.jpg"
                      },
                      {
                      "_id": 10,
                      "name": "ศิลปากรพาร์ทเนอร์อิสรชน",
                      "readTime": 3,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/10/cover846x400.jpg",
                      "content": "article/10/content.md",
                      "profilePic":"article/10/profile148x216.jpg"
                      },
                      {
                      "_id": 11,
                      "name": "อุรังคธาตุ ดิกชันนารี",
                      "readTime": 3,
                      "coverTitle": "JON SNOW'S<br>TARENTS",
                      "coverPic": "article/11/cover846x400.jpg",
                      "content": "article/11/content.md",
                      "profilePic":"article/11/profile148x216.jpg"
                      }]
      }],//cloumn
    "article" :[
                  {
                  "_id": 1,
                  "name": "10วิธีส้รางโลกสวนด้วยมือเรา",
                  "readTime": 3,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/1/cover846x400.jpg",
                  "content": "article/1/content.md",
                  "profilePic":"article/1/profile148x216.jpg"
                  },
                  {
                  "_id": 2,
                  "name": "สุดยอด5นิสัยสร้างความปวดหัวให้ชาวบ้าน",
                  "readTime": 2,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/2/cover846x400.jpg",
                  "content": "article/2/content.md",
                  "profilePic":"article/2/profile148x216.jpg"
                  },
                  {
                  "_id": 3,
                  "name": "Promtpay รับ-ออมเงินได้ทันใจ",
                  "readTime": 5,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/3/cover846x400.jpg",
                  "content": "article/3/content.md",
                  "profilePic":"article/3/profile148x216.jpg"
                  },
                  {
                  "_id": 4,
                  "name": "รวยขึ้นแบบปลอดภัยแค่รู้จักใช้ Asset Allocation",
                  "readTime": 1,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/4/cover846x400.jpg",
                  "content": "article/4/content.md",
                  "profilePic":"article/4/profile148x216.jpg"
                  },
                  {
                  "_id": 5,
                  "name": "โปรเจ็คสแควร์ เสกสรรค์เดี้ยง",
                  "readTime": 3,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/5/cover846x400.jpg",
                  "content": "article/5/content.md",
                  "profilePic":"article/5/profile148x216.jpg"
                  },
                  {
                  "_id": 6,
                  "name": "สตริงแชมปิยอง ตอกย้ำกัมมันตะ",
                  "readTime": 3,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/6/cover846x400.jpg",
                  "content": "article/6/content.md",
                  "profilePic":"article/1/profile148x216.jpg"
                  },
                  {
                  "_id": 7,
                  "name": "ไคลแมกซ์แชเชือนคันยิ ลองดูแล้วดี",
                  "readTime": 3,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/7/cover846x400.jpg",
                  "content": "article/7/content.md",
                  "profilePic":"article/7/profile148x216.jpg"
                  },
                  {
                  "_id": 8,
                  "name": " จิ๊กซอว์ไลท์เอ็กซ์โปรามาธิบดี",
                  "readTime": 3,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/8/cover846x400.jpg",
                  "content": "article/8/content.md",
                  "profilePic":"article/8/profile148x216.jpg"
                  },
                  {
                  "_id": 9,
                  "name": "เพนกวินคำสาปโพลารอยด์แอดมิสชัน",
                  "readTime": 3,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/9/cover846x400.jpg",
                  "content": "article/9/content.md",
                  "profilePic":"article/9/profile148x216.jpg"
                  },
                  {
                  "_id": 10,
                  "name": "ศิลปากรพาร์ทเนอร์อิสรชน",
                  "readTime": 3,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/10/cover846x400.jpg",
                  "content": "article/10/content.md",
                  "profilePic":"article/10/profile148x216.jpg"
                  },
                  {
                  "_id": 11,
                  "name": "อุรังคธาตุ ดิกชันนารี",
                  "readTime": 3,
                  "coverTitle": "JON SNOW'S<br>TARENTS",
                  "coverPic": "article/11/cover846x400.jpg",
                  "content": "article/11/content.md",
                  "profilePic":"article/11/profile148x216.jpg"
                  }

      ]//article
      };//mockup

/*exports.findAll = function() {
    return mock;
};

exports.userById = function (_id) {
    for (var i = 0; i < mock.obj.length; i++) {
        if (mock.user[i]._id == _id) return mock.user[i];
    }
};*/

module.exports = mock