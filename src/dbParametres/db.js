const db = {
   users: [
     {
       id: 'saiak-djsdk33-dkss4-kdkjslk4',
       name: 'Vladislav',
       login: 'vladdominator',
       password: '4940330'
     },
     {
       id: '939fkfkfk-494949fjkkf-49jdkdk-kfjkf',
       name: 'Ben',
       login: 'be134',
       password: '505005'
     }
   ],
   boards: [
     {
       'id': '4949-kkfk-4949kdkd-oror40',
       'title': 'One',
       'columns': [
         {
           'id': 'jjhkj999-ijjkj99-hhj55jhkj-78hjhjh',
           'title': 'column',
           'order': 0
         }
       ]
     }
   ],
   tasks: [
     {
       'id': '5c43bf1b-1a1f-4dab-9597-2c29eee072a7',
       'title': 'Задача 1',
       'order': 0,
       'description': 'Описание задачи 1',
       'userId': 'cbd836d9-ff4b-45be-bc71-9749eabfc980',
       'boardId': '45706cc2-f189-4eed-9e3f-29665168e717',
       'columnId': 'fb2b3c20-0cd7-47c8-a9d5-5df289346e07'
     },
     {
       'id': '7eecb3b7-a0c6-449d-b8d5-45585d439624',
       'title': 'Задача 2',
       'order': 1,
       'description': 'Описание задачи 2',
       'userId': 'cbd836d9-ff4b-45be-bc71-9749eabfc980',
       'boardId': '45706cc2-f189-4eed-9e3f-29665168e717',
       'columnId': 'fb2b3c20-0cd7-47c8-a9d5-5df289346e07'
     },
     {
       'id': '706ab077-5028-4b78-b485-809ed0b9663a',
       'title': 'Задача 3',
       'order': 2,
       'description': 'Описание задачи 3',
       'userId': 'cbd836d9-ff4b-45be-bc71-9749eabfc980',
       'boardId': '45706cc2-f189-4eed-9e3f-29665168e717',
       'columnId': 'fb2b3c20-0cd7-47c8-a9d5-5df289346e07'
     },
     {
       "id": "ff4432d8-16da-46e6-ab2a-86889e086af4",
       "title": "Задача 4",
       "order": 3,
       "description": "Описание задачи Шурупа",
       "userId": "16420e41-c15e-4476-967f-daa2917fda2e",
       'boardId': '45706cc2-f189-4eed-9e3f-29665168e717',
       'columnId': 'fb2b3c20-0cd7-47c8-a9d5-5df289346e07'
     }
   ]
 };
 
 module.exports = {
   db
 };