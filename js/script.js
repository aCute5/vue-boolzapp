const app = new Vue(
    {
        el:"#root",
        data:{
           
            contacts: [
                {
                name: 'Michele',
                avatar:'avatar_1.jpg',
                visible: true,
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdown: false,
                            delete: false,
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            dropdown: false,
                            delete: false,
                            },{
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            dropdown: false,
                            delete: false,
                            }
                            ],
                },
                {
                name: 'Fabio',
                avatar:'avatar_2.jpg',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                dropdown: false,
                delete: false,
                },
                {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                dropdown: false,
                },
                {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                dropdown: false,
                delete: false,
                }
                ],
                },
                {
                name: 'Samuele',
                avatar:'avatar_3.jpg',
                visible: true,
                messages: [
                {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                dropdown: false,
                delete: false,
                },
                {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                dropdown: false,
                delete: false,
                },
                {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                dropdown: false,
                delete: false,
                }
                ],
                },
                {
                name: 'Alessandro B.',
                avatar:'avatar_4.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                dropdown: false,
                delete: false,
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                dropdown: false,
                delete: false,
                }
                ],
                },
                {
                name: 'Alessandro L.',
                avatar:'avatar_5.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                dropdown: false,
                delete: false,
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                dropdown: false,
                delete: false,
                }
                ],
                },
                {
                name: 'Claudia',
                avatar:'avatar_6.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novit???',
                status: 'sent',
                dropdown: false,
                delete: false,
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                dropdown: false,
                delete: false,
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                dropdown: false,
                delete: false,
                }
                ],
                },
                {name: 'Federico',
                avatar:'avatar_7.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                status: 'sent',
                dropdown: false,
                delete: false,
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                dropdown: false,
                delete: false,
                }
                ],
                },
                {
                name: 'Davide',
                avatar:'avatar_8.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                dropdown: false,
                delete: false,
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                dropdown: false,
                delete: false,
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                dropdown: false,
                delete: false,
                }
                ],
                }
                ],
           index:0,
           input:0,
           searchInput:"",
           newMsg:"",
           
           
        },
        methods:{
            //funzione per selezionare la chat rispettiva alla list chat al @click
            chatSelect(indiceChat){
                this.index = indiceChat;
            },
            searchChat() {
                this.contacts.forEach((chat,i) => {
                  if (this.contacts[i].name.toLowerCase().includes(this.searchInput.toLowerCase())){
                      this.contacts[i].visible = true;
                  } else {
                    this.contacts[i].visible = false;
                  }
                });
              },
            addMsg(index){
                if (this.newMsg.trim() !== '') {
                    this.contacts[index].messages.push({
                       // date: new Date().toISOString().replaceAll('-','/').replaceAll("T","").split('.')[0],
                        date:luxon.DateTime.now().toFormat('MM-dd-yyyy-HH:mm'),
                        message: this.newMsg,
                        status: 'sent',
                        dropdown: false,
                        delete: false,
                    });
                    this.newMsg = '';
                }
                setTimeout (() => { this.contacts[index].messages.push({message: "ciao", status: "received",dropdown: false,
                delete: false,date:luxon.DateTime.now().toFormat('MM-dd-yyyy-HH:mm'),}); },2000);                                           
             }, // *important questo doppio metodo serve per arpire e chiudere la freccia; entra in conflitto con l'hover quindi nel CSS l'ho temporanamente tolto / *TODO: RISOLVERE IL CONFLITTO HOVER al passaggio del mouse 
             openDropdown(indexMessage){
                 this.contacts[this.index].messages[indexMessage].dropdown = true;
             },
             closeDropdown(indexMessage){
                this.contacts[this.index].messages[indexMessage].dropdown = false;

             },
            deleteMsg(indexDelete){ //function per rendere true il delete cosi al click di questa function cambia la classe del messaggio iterato che diventa fault
                this.contacts[this.index].messages[indexDelete].delete = true; 
            }
         }
})